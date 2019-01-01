<template>
    <div>
        <m-header title="搜索"></m-header>
        <form>
            <input type="text" placeholder="请输入商家或美食名称" class="search-text">
            <input type="submit" name="" id="" value="提交" class="submit">
        </form>
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
form{
    display: block;
    width:100%;
    background:#fff;
    height: px2rem(35);
    padding:px2rem(15) 0;
    @include bottom-border-1px(#f2f2f2);
    >input{
        display: inline-block;
        height:35px;
        padding: 0 px2rem(4);
        border-radius: px2rem(2);
        font-weight: bold;
    }
    .search-text{
        margin-left:px2rem(8);
        width:75%;
        float: left;
        border:px2rem(4) solid #f2f2f2;
        font-size: px2rem(14);
        color:#333;
        background:#f2f2f2;
    }
    .submit{
        width:15%;
        height:100%;
        float: right;
        border:px2rem(4) solid #789;
        background: #789;
        color:#fff;
        font-size: px2rem(16);
        line-height: px2rem(35);
    }
}
</style>
