<template>
    <div class="rating" ref="rating">
        <div>
        <div class="content">
           <div class="rating-left">
                <span class="score">4.7</span>
                <span class="mean">综合评分</span>
                <span>高于周边商家67%</span>
            </div>
            <div class="server-des">
                <span>服务态度<star :size="36" :score="info.serviceScore"></star></span>
                <span>商品评分<star :size="36" :score="info.serviceScore"></star></span>
                <span>送达时间{{info.deliveryTime}}分钟送达</span>
            </div> 
        </div>
        <div class="split"></div>  
        <div class="ratings-wrapper">
            <ul>
                <li class="ratings-item" v-for="(item,index) in ratings" :key="index">
                    <img :src="item.avatar" alt="">
                    <div class="ratings-content">
                        <p class="name">{{item.username}}</p>
                        <div class="time"><star :size="24" :score="item.score"></star><span>{{item.deliveryTime}}</span></div>
                        <p class="text">{{item.text}}</p>
                        <div class="recommed-ratings">
                        <i class="iconfont icon-tuijian"></i><span v-for="(list,index) in item.recommend" :key="index">
                            {{list}}
                        </span>
                        </div>
                    </div>
                    <div class="date">{{item.rateTime | dateString}}</div>   
                </li>
            </ul>
        </div> 
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import star from 'pages/star/star'
export default {
    components:{
        star
    },
    data(){
        return {
            ratings:[],
            info:{}
        }
    },
    created(){
        axios.get('static/data.json').then((res) =>{
            this.ratings=res.data.ratings
            this.info=res.data.info
            console.log(this.ratings)
            this.$nextTick(() =>{
                this.scroll = new BScroll(this.$refs.rating)
            })
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.rating{
    position: absolute;
    top:px2rem(208);
    left:0;
    width: 100%;
    bottom:0;
    color:#333;
    overflow: hidden;
    .content{
        display: flex;
        width:100%;
        padding:px2rem(20) 0;
        background: #fff;
        .rating-left{
            flex: 0 0 px2rem(164);
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right:px2rem(2) solid #f5f6f7;
            font-size: px2rem(14);
            line-height: px2rem(20);
            color:#999;
            .score{
                color:orange;
                font-size: px2rem(20);
                line-height: px2rem(30);
                font-weight: bold;
            }
            .mean{
                color:#666;
                font-weight: bold;
            }
        }
        .server-des{
            flex: 1;
            display: flex;
            flex-direction: column;
            >span{
                margin-left:px2rem(10);
                font-size: px2rem(14);
                color:#333;
                line-height: px2rem(25);
                font-weight:bold;
            }
        }
    }
    .split{
        width:100%;
        @include border-1px(#ddd);
        height: px2rem(16);
        background: #f5f6f7;
    }
    .ratings-wrapper{
        padding: px2rem(10);
        background: #fff;
        .ratings-item{
            width:100%;
            position: relative;
            display: flex;
            padding:px2rem(10);
            @include bottom-border-1px(#ddd);
            img{
                flex:0 0 px2rem(28);
                width:px2rem(28);
                height:px2rem(28);
                padding: px2rem(10);
                margin-right:px2rem(12);
                border-radius: 50%;
            }
            .ratings-content{
                flex: 1;
                flex-direction: column;
                padding-right:px2rem(10);
                .name{
                    font-size: px2rem(10);
                    color:#666;
                    line-break: px2rem(12);
                    margin-bottom:px2rem(4);
                }
                .time{
                    color:#999;
                    font-size: px2rem(10);
                    line-height: px2rem(16);
                    .star{
                        vertical-align: top;
                        margin-right: px2rem(6);
                        display: inline-block;
                    }
                }
                .text{
                    font-size: px2rem(12);
                    color:#444;
                    line-height: px2rem(16);
                }
                .recommed-ratings{
                    display: block;
                    .iconfont{
                        font-size: px2rem(9);
                        line-height: px2rem(16);
                        padding: 0 px2rem(6);
                        color:yellow;
                    }
                    span{
                        display: inline-block;
                        border:px2rem(1) solid #ddd;
                        line-height: px2rem(16);
                        font-size: px2rem(9);
                        color:#999;
                        padding:0 px2rem(6);
                    }
                }
            }
            .date{
                position: absolute;
                top:px2rem(10);
                right:px2rem(20);
                font-size: px2rem(10);
                color:#999;
            }
        }
    }
}
</style>
