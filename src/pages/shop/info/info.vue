<template>
    <div class="info">
        <div class="distr-info">
            <h2>配送信息</h2>
            <p><i class="desc">{{info.description}}</i>由商家配送提供配送约{{info.deliveryTime}}分钟送达 距离{{info.distance}}</p>
            <p>配送费￥{{info.deliveryPrice}}</p>
        </div>
        <div class=" activ-info">
            <h2>活动与服务</h2>
            <p v-for="(item,index) in info.supports" :key="index"><i class="desc">{{item.name}}</i>{{item.content}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            info:{}
        }
    },
    mounted(){
        axios.get('static/data.json').then((res) =>{
            this.info = res.data.info
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.info{
    position: absolute;
    top:px2rem(208);
    left:0;
    color:#333;
    overflow: hidden;
    width:100%;
    .distr-info{
        width:100%;
        padding:px2rem(20);
        background: #fff;
        margin-bottom: px2rem(20);
        @include bottom-border-1px(#ddd);
        h2{
            font-size: px2rem(18);
            color:#000;
            font-weight: bold;
            padding-bottom: px2rem(20);
        }
        p{
            font-size: px2rem(14);
            color:#666;
            padding-bottom: px2rem(10);
            .desc{
                background:#3CB371;
                font-size: px2rem(12);
                color:#fff;
                margin-right:px2rem(10);
            }
        }
    }
    .activ-info{
        width:100%;
        padding:px2rem(20);
        background: #fff;
        @include border-1px(#ddd);
        h2{
            font-size: px2rem(18);
            color:#000;
            font-weight: bold;
            padding-bottom: px2rem(20); 
        }
        p{
            font-size: px2rem(14);
            line-break: px2rem(20);
            padding-bottom: px2rem(10);
            .desc{
                font-size: px2rem(12);
                margin-right: px2rem(10);
                color:#fff;
                background: orange;
            }
        }
    }
}
</style>
