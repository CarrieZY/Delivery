<template>
<div>
    <div class="shopcart">
        <div class="cart">
            <div class="logo-cart" @click="showList">
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
    <transition name="fade">
    <div class="shoplist" v-show="ShowShoplist" >
        <div class="shoplist-header">
            <span class="title">购物车</span>
            <span class="clear">清空</span>
        </div>
        <div class="shopContent" ref="shopContent">
            <ul>
                <li v-for="(food,index) in foodsCart" :key="index" class="food">
                    <span class="name">{{food.name}}</span>
                    <div class="price"><span>{{food.price*food.count}}</span></div>
                    <div class="cartcount-warpper">
                        <cart-count :food="food"></cart-count>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </transition>
    <transition name="mask">
        <div class="list-mask" v-show="ShowShoplist" @click="showList"></div>
    </transition>
</div>    
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { mapState,mapGetters} from 'vuex'
import cartCount from '../cartCont/cartcont'
export default {
    components:{
        cartCount
    },
    props:{
        food:Object
    },
    data(){
        return {
            isShow:false,
            info:''
        }
    },
    computed:{
        ...mapState({foodsCart:state=>state.foodsCart}),
        ...mapGetters(['totalCount','totalPrice']),
        payText(){
            const {totalPrice} =this
            // console.log({minPrice})
            if(totalPrice === 0){
                return `￥${this.info.minPrice}起送`
            }else if(totalPrice<this.info.minPrice){
                return `还差￥${this.info.minPrice-totalPrice}元起送`
            }else{
                return `去结算`
            }
        },
        //计算购物车是否显示
        ShowShoplist(){
            if(this.totalCount===0){
                return this.isShow=false
            }
            if(this.isShow){
                this.$nextTick(() =>{
                    if(!this.scroll){
                        this.scroll=new BScroll(this.$refs.shopContent,{
                            click:true
                        })
                    }else{
                        this.scroll.refresh()
                    }
                })
            }
            return this.isShow
        }
    },
    methods:{
        showList(){
           if(this.totalCount){ //有数量时切换显示隐藏
               this.isShow=!this.isShow
           }
        },
        clear(){
            if(window.confirm('确定要清空购物车吗？')){
                this.$store.dispatch('clearCart')
            }
        }
    },
    mounted(){
        axios.get('static/data.json').then((res) =>{
            this.info=res.data.info
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shopcart{
    position: fixed;
    left:0;
    bottom:0;
    z-index: 105;
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
.shoplist{
    position: absolute;
    bottom: px2rem(46);
    left:0;
    width:100%;
    z-index:104;
    &.fade-enter-active, &.fade-leave-active{
        transition:all .5s;
    }
    &.fade-enter, &.fade-leave-to{
        transform:translate3d(0,0,0);
    } 
    .shoplist-header{
        height:px2rem(40);
        line-height: px2rem(40);
        padding:0 px2rem(8);
        background:#eee;
        @include bottom-border-1px(#ddd);
        .title{
            float:left;
            font-size: px2rem(14);
            color:rgb(7,17,27);
        }
        span{
            float:right;
            font-size: px2rem(12);
            color:rgb(0,160,220);
        }
    }
    .shopContent{
        padding:px2rem(10) px2rem(18);
        max-height: px2rem(217);
        overflow: hidden;
        background: #fff;
        .food{
            position: relative;
            padding: px2rem(12) 0;
            box-sizing: border-box;
            @include bottom-border-1px(#ddd);
            .name{
                line-height: px2rem(24);
                font-size: px2rem(14);
                color:rgb(7,17,27);
            }
            .price{
                position:absolute;
                right:px2rem(90);
                bottom:px2rem(12);
                font-size: px2rem(14);
                font-weight: 700;
                color:red;
            }
            .cartcount-warpper{
                position: absolute;
                right:0;
                bottom:px2rem(6);
            }
        }
    }
}
.list-mask{
    background: rgba(0,0,0,.4);
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 103;
    &.mask-enter-active, &.mask-leave-active{
        opacity:1;
        background: rgba(0,0,0,.4);
    }
    &.mask-enter, &.mask-leave-to{
        opacity: 0;
    }
}
</style>
