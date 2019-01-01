<template>
    <div class="shop-header">
        <nav>
            <img :src="info.bgImg" alt="">
            <i class="iconfont icon-back" @click="back"></i>
        </nav>
        <div class="shop-content">
            <img :src="info.avatar" alt="">
            <p class="title">{{info.name}}<i class="iconfont icon-jiantou1"></i></p>
            <p class="desc">月售{{info.sellCount}}单 {{info.description}}约{{info.deliveryTime}}分钟
                距离{{info.distance}}
            </p>
            <p class="activity"><span>{{info.supports[0].name}}</span>{{info.supports[0].content}}</p>
        </div>
        <div class="shop-nav">
            <router-link to="/shop/goods" tag="a" class="tab">点餐</router-link>
            <router-link to="/shop/rating" tag="a" class="tab">评论</router-link>
            <router-link to="/shop/info" tag="a" class="tab">商家</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        info:{
            type:Object,
            default:{}
        }
    },
    methods:{
        back(){
            this.$router.push({path:'/Mister'})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shop-header{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    z-index:100;
    nav{
        width:100%;
        height:px2rem(50);
        overflow: hidden;
        img{
            width:100%;
            height:auto;
        }
        .iconfont{
            position: absolute;
            top:px2rem(10);
            left:px2rem(10);
            color:#fff;
            z-index:101;
            font-size: px2rem(26);

        }
    }
    .shop-content{
        width:100%;
        margin:0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        padding-bottom: px2rem(10);
        img{
            width:px2rem(60);
            height:px2rem(60);
            margin-top:px2rem(-30);
        }
        p{
            width:80%;
            margin: 0 auto;
            text-align: center;
            font-size: px2rem(12);
            margin-bottom: px2rem(10);
            color:#999;
        }
        .title{
            font-size: px2rem(20);
            color:#333;
            font-weight: bold;
            &::before{
                display: inline-block;
                content:'品牌';
                color:#333;
                font-size: px2rem(10);
                background: #ff0;
                padding: px2rem(3);
                margin-right:px2rem(5);
                vertical-align: top;
            }
            .iconfont{
                margin-left:px2rem(10);
            }
        }
        .activity{
            display: inline-block;
            border:px2rem(1) solid #e4e4e4;
            font-size: px2rem(12);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            &::after{
                content:'8个优惠>';
                float:right;
                font-size: px2rem(12);
                text-align: right;
            }
            span{
                float: left;
                background:#3CB371;
                color:#fff;
                font-size: px2rem(8);
                line-height: px2rem(14);
            }
        }
    }
    .shop-nav{
        display: flex;
        width:100%;
        height:px2rem(40);
        line-height: px2rem(40);
        background: #fff;
        @include bottom-border-1px(#ddd);
        .tab{
            flex:1;
            text-align: center;
            color:#999;
            font-weight: bold;
            &.router-link-active{
                color:#3CB371;
            }
        }
    }
}
</style>
