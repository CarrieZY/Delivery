<template>
<div>
    <div class="shop-goods">
        <div class="menu-goods" ref="menuGoods">
            <ul>
            <li v-for="(item,index) in goods" :key="index"
            :class="{'crrent':crrentIndex===index}" @click="menuGoodClick(index)">
               <i class="iconfont" v-show="index<2" :class="{'icon-hothuorererexiao':index===1 , 'icon-youhuifangshi':index===0}"></i>{{item.name}} 
            </li>
            </ul>            
        </div>
        <div class="menu-foods" ref="menuFoods">
            <ul>
                <li v-for="(item,index) in goods" :key="index" class="goods-name">
                    <p class="title">{{item.name}}</p>
                    <ul>
                        <li v-for="(food,index) in item.foods" :key="index" @click="goodsDeShow(food,$event)">
                            <img :src="food.image" alt="">
                            <div class="content">
                                <span class="name">{{food.name}}</span>
                                <span>{{food.description}}</span>
                                <span>月{{food.sellCount}}份 好评率{{food.rating}}%</span>
                                <span class="price">￥{{food.price}}</span>
                            </div>
                            <div class="cartcont">
                                <cart-cont :food="food"></cart-cont>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <foods :food="food"  ref="food" />
    <shop-cart></shop-cart>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import shopCart from '../shopCart/shopCart'
import foods from './foods'
import cartCont from '../cartCont/cartcont'
export default {
    components:{
        shopCart,
        foods,
        cartCont
    },
    data(){
        return {
            goods:[],
            goodsList:[],
            scrollY:0,
            food:{}
        }
    },
    methods:{
        goodsDeShow(food,event){
            if (!event._constructed) {// 阻止浏览器的原生 click 事件
	        return;
            }
            this.food=food
            this.$refs.food.toggleShow()
        },
        menuGoodClick(index){
            //console.log(index)
            //计算出对应的foods的li的数量
            let foodList = this.$refs.menuFoods.getElementsByClassName('goods-name')
            //console.log(foodList)
            //点击滚动到当前的li，
            this.scroll.scrollToElement(foodList[index],250)
        },
        //计算每一个foods的li的高度
        calHeight(){
            let foodList = this.$refs.menuFoods.getElementsByClassName('goods-name')
            console.log(foodList)
            let height =0;
            this.goodsList.push(height)
            for(let i=0;i<foodList.length;i++){
                let item = foodList[i]
                height +=item.clientHeight
                this.goodsList.push(height)
            }
            console.log(this.goodsList)
        },
        _inintScroll(){
            this.scroll = new BScroll(this.$refs.menuGoods,{
                click:true
            })
            this.scroll = new BScroll(this.$refs.menuFoods,{
                click:true,
                probeType:3  //scroll滚动时  能实时的告诉我们位置 监测
            })
            //监听事件   scroll滚动时  实时的暴露位置
            this.scroll.on('scroll',(pos) =>{
                this.scrollY=Math.abs(Math.round(pos.y))
            })
        }
    },
    computed:{
        //计算点击当前的foods的li的对应的index值
        crrentIndex(){
            for(let i=0;i<this.goodsList.length;i++){
                //定义两个变量考虑当height2没有的情况下i=0；
                let height1 = this.goodsList[i]
                let height2 = this.goodsList[i+1]
                if(!height2 || (this.scrollY>= height1&& this.scrollY<height2)){
                    return i
                }
            }
            return 0
        }
    },
    created(){
        axios.get('static/data.json').then((res) =>{
            this.goods=res.data.goods
            this.$nextTick(() =>{
                this._inintScroll()
                this.calHeight()
            })
        })
    } 
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shop-goods{
    position: absolute;
    top:px2rem(208);
    left:0;
    width:100%;
    color:#333;
    overflow: hidden;
    display: flex;
    bottom:px2rem(46);
    .menu-goods{
        width:100%;
        flex: 0 0 px2rem(80);
        height:100%;
        background: #f3f5f7;
        li{
            display: flex;
            vertical-align: middle;
            align-items: center;
            width:px2rem(56);
            height:px2rem(54);
            padding: 0 px2rem(12);
            line-height: px2rem(14);
            @include bottom-border-1px(#ddd);
            &.crrent{
                background: #fff;
            }
            i{
                display: inline-block;
                width:px2rem(12);
                height:px2rem(12);
                vertical-align: top;
                font-size: px2rem(12);
                margin-right:px2rem(5);
                font-weight: bold;
                &.icon-hothuorererexiao{
                    color:red;
                }
                &.icon-youhuifangshi{
                    color:#3cb374;
                }
            }
        }

    }
    .menu-foods{
        width:100%;
        flex:1;
        .goods-name{
            .title{
                font-size: px2rem(12);
                line-height:px2rem(26);
                padding-left: px2rem(14);
                background: #f3f5f7;
                width:100%;
                border-left: px2rem(2) solid #ddd;
            }
            >ul li{
                background: #fff;
                display: flex;
                padding: px2rem(20) 0 px2rem(10) px2rem(15);
                position: relative;
                @include bottom-border-1px(#ddd);
                img{
                    width:px2rem(57);
                    height:px2rem(57);
                }
                .content{
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    padding-left: px2rem(10);
                    >span{
                        font-size: px2rem(12);
                        color:#999;
                        line-height: px2rem(18);
                    }
                    .name{
                        font-size: px2rem(14);
                        color:#333;
                        font-weight: bold;
                    }
                    .price{
                        color:red;
                        font-weight: bold;
                    }
                }
                .cartcont{
                    position: absolute;
                    right: 0;
                    bottom:px2rem(10);
                }
            }
        }
    }
}
</style>
