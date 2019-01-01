<template>
    <div class="rating">
        <div class="content">
           <div class="rating-left">
                <span class="score">4.7</span>
                <span class="mean">综合评分</span>
                <span>高于周边商家67%</span>
            </div>
            <div class="server-des">
                <span>服务态度</span>
                <span>商品评分</span>
                <span>送达时间</span>
            </div> 
        </div>   
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            ratings:[]
        }
    },
    created(){
        axios.get('static/data.json').then((res) =>{
            this.ratings=res.data.ratings
            console.log(this.ratings)
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
    color:#333;
    overflow: hidden;
    .content{
        display: flex;
        width:100%;
        padding:px2rem(20) 0;
        background: #fff;
        @include bottom-border-1px(#ddd);
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
}
</style>
