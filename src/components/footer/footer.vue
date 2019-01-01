<template>
    <div class="footer">
        <router-link tag="a" to="/Mister"><span><i class="iconfont icon-shouye"></i></span><span>首页</span></router-link>
        <router-link tag="a" to="/Search"><span><i class="iconfont icon-sousuo"></i></span><span>搜索</span></router-link>
        <router-link tag="a" to="/Order"><span><i class="iconfont icon-dingdan"></i></span><span>订单</span></router-link>
        <router-link tag="a" to="/prolife"><span><i class="iconfont icon-wode"></i></span><span>我的</span></router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.footer{
    width:100%;
    height:px2rem(50);
    background:#fff;
    @include top-border-1px(#92a6b9);
    position: fixed;
    bottom:0;
    left:0;
    display: flex;
    z-index:100;
    .router-link-active span{
        color: #778899;
        font-weight: bold;
    }
    >a{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items:center;
        color:#000;
        >span{
            font-size: px2rem(12);
            margin:px2rem(2) 0;
            .iconfont{
                font-size: px2rem(22);
                margin:px2rem(10) 0;
            }
        }
    }
}
</style>
