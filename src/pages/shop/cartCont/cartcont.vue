<template>
    <div class="cart-content">
        <span class="iconfont icon-jianhao" v-show="food.count" @click.stop="updataFoodCount(false)"></span>
        <span v-show="food.count">{{food.count}}</span>
        <span class="iconfont icon-jiahao" @click.stop="updataFoodCount(true)"></span>
    </div>    
</template>

<script>
export default {
    props:{
        food:{
            type:Object
        }
    },
    methods:{
        updataFoodCount(isAdd){
            const {food} = this
            // console.log({food})
            this.$store.dispatch('updataFoodCount',{food,isAdd})    
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-content{
    padding:px2rem(10);
    >span{
        font-size: px2rem(20);
        color:#999;
        line-height:px2rem(24);
        padding: px2rem(6);
    }
    .iconfont{
        font-size: px2rem(24);
        color:green;
    }

}
</style>
