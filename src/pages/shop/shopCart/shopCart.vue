<template>
<div>
    <div class="shopcart">
        <div class="cart">
            <div class="logo-cart">
                <i class="iconfont icon-icon22fuzhi" :class="{highlight:totalCount>0}"></i>
                <div class="num" v-show="totalCount>0">{{totalCount}}</div>
            </div>
        </div>
        <div class="content">
            <span class="price" :class="{'priceHight':totalPrice>0}">￥{{totalPrice}}</span>
            <span>配送费￥{{info.deliveryPrice}}</span>
        </div>
        <div class="settle">{{payText}}</div>
    </div>
    <div class="shoplist">
        <div class="shoplist-header">
            <h1>购物车</h1>
            <span>清空</span>
        </div>
        <div class="shopContent">
            <ul>
                <li v-for="(food,index) in shopCart" :key="index">
                    <span class="name">{{food.name}}</span>
                    <div class="price"><span>{{food.price*food.count}}</span></div>
                    <div class="cartcount-warpper">
                        <cart-count :food="food"></cart-count>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>    
</template>

<script>
import cartCount from '../cartCont/cartcont'
import { mapState,mapGetters } from 'vuex'
export default {
    components:{
        cartCount
    },
    props:{
        info:Object,
        food:Object
    },
    data(){
        return {
            listShow:true
        }
    },
    computed:{
        ...mapState(['shopCart']),
        ...mapGetters(['totalCount',' totalPrice']),
        payText(){
            const {totalPrice} = this
            const {miniPrice} = this.info
            if(totalPrice===0){
                return `￥{{info.minPrice}}元起送`
            }else if(totalPrice<miniPrice){
                return `还差￥${miniPrice-totalPrice}元起送`
            }else{
                return `去结算`
            }
        }
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
                &.highlight{
                    background: green;
                    color:#fff;
                }
            }
            .num{
                position: absolute;
                top:0;
                right: 0;
                width:px2rem(24);
                height:px2rem(16);
                line-height: px2rem(16);
                text-align: center;
                border-radius: px2rem(16);
                box-shadow: 0 px2rem(4) px2rem(8) 0  rgba(0,0,0,.4);
                font-size: px2rem(9);
                color:#fff;
                background:green;
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
            color:#ddd;
            font-weight: bold;
            &.priceHight{
                color:#fff;
            }
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
