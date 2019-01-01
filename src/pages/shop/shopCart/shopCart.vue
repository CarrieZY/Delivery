<template>
    <div class="shopcart">
        <div class="cart">
            <div class="logo-cart">
                <i class="iconfont icon-icon22fuzhi"></i>
            </div>
        </div>
        <div class="content">
            <span class="price">￥0</span>
            <span>配送费￥{{info.deliveryPrice}}</span>
        </div>
        <div class="settle">￥{{info.minPrice}}元起送</div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            info:{}
        }
    },
    mounted(){
        axios.get('static/data.json').then((res) =>{
            this.info=res.data.info
        })
    },
    computed:{
        ...mapState(['shopCart'])
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shopcart{
    position: fixed;
    left:0;
    bottom:0;
    height:px2rem(46);
    width:100%;
    background: #000;
    display: flex;
    color:#fff;
    .cart{
        flex:0 0 px2rem(80);
        width:100%;
        position: relative;
        .logo-cart{
            position: absolute;
            right:0;
            width:px2rem(62);
            height:px2rem(62);
            top:px2rem(-20);
            border-radius: 50%;
            background: #000;
            .iconfont{
                display: block;
                width:px2rem(50);
                height:px2rem(50);
                border-radius: 50%;
                background: #333;
                margin:px2rem(6);
                text-align: center;
                line-height: px2rem(50);
                font-size: px2rem(30);
                color:#ccc;
            }
        }
    }
    .content{
        flex:1;
        display: flex;
        flex-direction: column;
        margin-left:px2rem(10);
        span{
            font-size: px2rem(14);
            line-height: px2rem(23);
            color:#999;
        }
        .price{
            font-size: px2rem(16);
            color:#fff;
            font-weight: bold;
        }
    }
    .settle{
        flex:0 0 px2rem(105);
        width:100%;
        line-height: px2rem(48);
        font-size: px2rem(16);
        font-weight: bold;
        background: #333;
        text-align: center;
    }
}
</style>
