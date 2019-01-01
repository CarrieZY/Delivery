<template>
    <div class="order">
        <m-header title="订单列表"></m-header>
        <div class="content">
            <img src="./person.png" alt="">
            <router-link to="/login">
            <button>立即登录</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import MHeader from 'components/header/header'
export default {
    components:{
        MHeader
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.order{
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        button{
            margin-top:px2rem(10);
            font-size: px2rem(16);
            padding:px2rem(5);
            background: #789;
            color:#fff;
            border:px2rem(4) solid #789;
            border-radius: px2rem(2);
        }
    }
}
</style>