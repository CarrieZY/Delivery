<template>
    <div class="foods" :ref="food" v-show="isShow">
        <div class="content">
            <header>
                <i class="iconfont icon-back" @click="toggleShow"></i>
                <img :src="food.image" alt="">
                <p>{{food.info}}</p>
            </header>
            <div class="desc">
                <h2>{{food.name}}</h2>
                <p>月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
            </div>
            <div class="price">
                <span>￥{{food.price}}</span>
            </div>
        </div>
        <div class="food-mask" @click="toggleShow"></div>
    </div>
</template>

<script>
export default {
    props:{
        food:{
            type:Object
        }
    },
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        toggleShow(){
            this.isShow=!this.isShow
        }
    }

}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.foods{
    width:100%;
    .content{
        position: fixed;
        top:15%;
        left:10%;
        bottom:25%;
        right:10%;
        z-index: 106;
        background: #fff;
        border:px2rem(1) solid #ddd;
        header{
            width:100%;
            height:70%;
            position: relative;
            img{
                width:100%;
                height:100%;
            }
            .iconfont{
                position: absolute;
                top:px2rem(5);
                left:px2rem(5);
                font-size: px2rem(20);
                color:#333;
                font-weight: bold;
            }
            p{
                position: absolute;
                bottom:px2rem(5);
                left:px2rem(5);
                font-size: px2rem(12);
                color:#999;
                letter-spacing: px2rem(2);
            }
        }
        .desc{
            width:80%;
            padding: px2rem(10);
            h2{
                font-size: px2rem(16);
                line-height: px2rem(20);
                color:#000;
                font-weight: bold;
            }
            p{
                font-size: px2rem(14);
                line-height: px2rem(20);
                color:#999;
            }
        }
        .price{
            width:80%;
            padding: px2rem(10);
            >span{
                font-size: px2rem(14);
                color:red;
                font-weight: bold;
            }
        }
    }
    .food-mask{
        position: fixed;
        z-index:105;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: rgba(0,0,0,.2);
    }
}
</style>
