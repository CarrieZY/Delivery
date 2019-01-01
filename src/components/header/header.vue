<template>
    <div class="header">
        <slot name="search"></slot>
        <a class="header-title">{{title}}</a>
        <slot name="login"></slot>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.header{
    width:100%;
    height:px2rem(45);
    position:fixed;
    z-index:100;
    top:0;
    left:0;
    @include bottom-border-1px(#92a6b9);
    background:#778899;
    display: flex;
    >a{
        color:#fff;
        font-size: px2rem(20);
        line-height: px2rem(45);
    }
    .header-search{
        flex:0 0 20%;
        text-align: left;
        padding-left: px2rem(10);
    }
    .header-title{
        flex:1;
        text-align: center;
    }
    .login{
        flex:0 0 30%;
        text-align: right;
        padding-right:px2rem(10);
    }
}
</style>
