<template>
    <div class="shop-list">
        <div class="list-header">
           <h1 class="title"></h1>
           <span class="empty">清空</span>
        </div>
        <ul class="list-content">
            <li class="food" v-for="(food,index) in selectFood" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price">
                    <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="cartcount-warpper">
                    <cart-count :food="food"></cart-count>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import cartCount from '../cartCont/cartcont'
export default {
    components:{
        cartCount
    },
    props:{
        food:Object
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shop-list{
    position: absolute;
    top: 0;
    left:0;
    width:100%;
    .list-header{
        height:px2rem(40);
        line-height: px2rem(40);
        color:#666;
        background: #eee;
        @include border-1px(#ddd);
    }
}
</style>
