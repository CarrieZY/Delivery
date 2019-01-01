<template>
    <div class="cart-content">
        <span class="iconfont icon-jianhao" v-show="food.count" @click.stop="addFoodCount(false)"></span>
        <span>{{food.count}}</span>
        <span class="iconfont icon-jiahao" @click.stop="addFoodCount(true)"></span>
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
        addFoodCount(isAdd){
            const {food} =this
            this.$store.dispatch('addFoodCount',{food,isAdd})    
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-content{
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
