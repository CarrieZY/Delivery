<template>
    <div class="mister">
       <m-header title="显示当前地址">
           <router-link tag="a" slot="search" class="header-search" to="/Search">
            <i class="iconfont icon-sousuo"></i>
           </router-link>
           <router-link tag="a" slot="login" class="login" to="/login">登录|注册
           </router-link>
       </m-header>
       <div class="wrapper" ref="wrapper">
           <div class="content">
               <swiper :options="swiperOption" class="nav">
                   <swiper-slide v-for="(page,index) in pages" :key="index">
                   <div class="icons" v-for="item in page" :key="item.id"><img :src="item.src" alt=""><p>{{item.title}}</p></div>
                   </swiper-slide>
                   <div class="swiper-pagination"  slot="pagination"></div>
               </swiper>
               <div class="shop-header">
                <i class="iconfont icon-gengduo"></i><span>附近商家</span>
               </div>
               <shop-list></shop-list>   
           </div>
       </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import BScroll from 'better-scroll'
import MHeader from 'components/header/header'
import ShopList from 'components/shopList/shopList'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
        MHeader,
        swiper,
        swiperSlide,
        ShopList
    },
    data() {
      return {
        swiperOption:{
            pagination: {
                el: '.swiper-pagination'
            }
        },  
        items:[
            {
                id:'001',
                src:require('./images/nav/2.jpg'),
                title:'甜品'
            },
            {
                id:'002',
                src:require('./images/nav/3.jpg'),
                title:'甜品'
            },
            {
                id:'003',
                src:require('./images/nav/4.jpg'),
                title:'甜品'
            },
            {
                id:'004',
                src:require('./images/nav/5.jpg'),
                title:'甜品'
            },
            {
                id:'005',
                src:require('./images/nav/6.jpg'),
                title:'甜品'
            },
            {
                id:'006',
                src:require('./images/nav/8.jpg'),
                title:'甜品'
            },
            {
                id:'007',
                src:require('./images/nav/9.jpg'),
                title:'甜品'
            },
            {
                id:'008',
                src:require('./images/nav/10.jpg'),
                title:'甜品'
            },
            {
                id:'009',
                src:require('./images/nav/11.jpg'),
                title:'甜品'
            },
            {
                id:'010',
                src:require('./images/nav/12.jpg'),
                title:'甜品'
            },
            {
                id:'011',
                src:require('./images/nav/13.jpg'),
                title:'甜品'
            }
        ]
      }
    },
    computed:{
        //计算nav的icon
        pages(){
            const pages=[];
            this.items.forEach((item,index) =>{
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                } 
                pages[page].push(item)
            })
            return pages
            console.log(pages)
        }
    },
    mounted(){  
        this.$nextTick(() => {
            if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click:true
            })
            console.log(this.scroll)
            }
        })
    }
}
</script>



<style lang="scss" scoped>
@import '~common/css/mixmin';
.icon-sousuo{
    font-size: px2rem(26);
}
.wrapper{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    overflow: hidden;
    .content{
        width:100%;
        .nav{
            background:#fff;
            padding-top:px2rem(45);
            padding-bottom: px2rem(10);
            @include bottom-border-1px(#e4e4e4);
            .icons{
                width:25%;
                float:left;
                text-align: center;
                padding-top:px2rem(10);
                img{
                    width:px2rem(60);
                    height:px2rem(60);
                }
                p{
                    font-size: px2rem(13);
                    color:#333;
                }
            }
        }
        .shop-header{
            margin-top:px2rem(10);
            width:100%;
            @include top-border-1px(#e4e4e4);
            background: #fff;
            padding:px2rem(10);
            .iconfont{
                color:#999;
                margin-left:px2rem(5);
            } 
            span{
                font-size: px2rem(14);
                line-height: px2rem(20);
                color:#999;
                margin-left:px2rem(5);
            }
        }
    }
}
</style>
