<template>
<div>
    <div class="shop-list" v-for="(item,index) in items" :key="index" @click="toShop">
        <div class="shop-pic"><img :src="item.pic" ></div>
        <div class="shop-content">
            <p class="title">{{item.title}}</p>
            <p class="order"><span>{{item.score}}</span>{{item.order}}</p>
            <p class="send"><span>{{item.pices}}</span>/<span>{{item.send}}</span></p>
        </div>
        <div class="shop-rating">
            <p class="title">保 准 票</p>
            <p class="courier"></p>
        </div>
    </div>
</div>    
</template>

<script>
export default {
    data(){
        return {
            items:[
                {
                    pic:require('./shop/1.jpg'),
                    title:'小马哥卤肉饭',
                    score:'4.7',
                    order:'月销100单',
                    pices:'￥20',
                    send:'配送费约￥5'
                },
                {
                    pic:require('./shop/2.jpg'),
                    title:'羲和小馆(王府中环店)',
                    score:'4.7',
                    order:'月销100单',
                    pices:'￥20',
                    send:'配送费约￥5'
                },
                {
                    pic:require('./shop/3.jpg'),
                    title:'火炉火韩式拌饭(新世界店)',
                    score:'4.7',
                    order:'月销100单',
                    pices:'￥20',
                    send:'配送费约￥5'
                },
                {
                    pic:require('./shop/4.jpg'),
                    title:'美味花蛤(第4号档口食尚美食城店)',
                    score:'4.7',
                    order:'月销100单',
                    pices:'￥20',
                    send:'配送费约￥5'
                },
                {
                    pic:'//fuss10.elemecdn.com/e/17/27fa41fc2b03b1b8c2d794a5cf139jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    title:'汉堡王（北京新世界店17825）',
                    score:'4.7',
                    order:'月销100单',
                    pices:'￥20',
                    send:'配送费约￥5'
                }
            ]
        }
    },
    methods:{
        toShop(){
            this.$router.push({path:'/shop'})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~common/css/mixmin';
.shop-list{
    width:100%;
    @include bottom-border-1px(#f1f1f1);
    padding:px2rem(15) px2rem(8);
    background:#fff;
    display: flex;
    .shop-pic{
        flex:0 0 23%;
        float:left;
        height:px2rem(75);
        padding-right:px2rem(10);
        display: block;
        >img{
            width:100%;
            height:100%;
        }
    }
    .shop-content{
        flex:1;
        display: flex;
        flex-direction: column;
        .title{
            font-size: px2rem(16);
            line-height: px2rem(16);
            font-weight: 700;
            color:#333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &::before{
                content:'品牌';
                display: inline-block;
                color:#333;
                font-size: px2rem(11);
                line-height: px2rem(11);
                background:#ffd930;
                margin-right:px2rem(5);
                padding: px2rem(2);
                border-radius: px2rem(2);
            }
        }
        .order{
            font-size: px2rem(11);
            padding: px2rem(15) 0;
            color:#999;
            span{
                margin-right:px2rem(5);
                color:#DC143C;    
            }
        }
        .send{
           font-size: px2rem(11); 
           color:#999;
           span{
               margin-right:px2rem(5);
           }
        }
    }
    .shop-rating{
        flex: 0 0 20%;
        display: flex;
        flex-direction: column;
        font-size: px2rem(13);
        color:#999;
        .title{
            letter-spacing: px2rem(5);
        }
        .courier{
            margin-top:px2rem(20);
            display:inline-block;
            color:#778899;
            border-radius: px2rem(2);
            &::before{
                content:'蜂鸟专送';
                display: inline-block;
                color:#fff;
                font-size: px2rem(11);
                line-height: px2rem(11);
                background:#778899;
                margin-right:px2rem(5);
                padding: px2rem(2);
                border-radius: px2rem(2);
            }
        }
    }
}
</style>
