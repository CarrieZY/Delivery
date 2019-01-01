import Vue from 'vue'
import Router from 'vue-router'
import Mister from 'pages/Mister/Mister'
import Order from 'pages/Order/Order'
import prolife from 'pages/prolife/prolife'
import Search from 'pages/Search/Search'
import login from 'pages/login/login'
import shop from 'pages/shop/shop'
import shopGoods from 'pages/shop/goods/goods'
import shopRating from 'pages/shop/rating/rating'
import shopInfo from 'pages/shop/info/info'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect :'/Mister',
            meta:{showFooter:true}
        },
        {
            path:'/Mister',
            component:Mister,
            meta:{showFooter:true}
        },
        {
            path:'/Search',
            component:Search,
            meta:{showFooter:true}
        },
        {
            path:'/Order',
            component:Order,
            meta:{showFooter:true}
        },
        {
            path:'/prolife',
            component:prolife,
            meta:{showFooter:true}
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/shop',
            component:shop,
            children:[
                {
                    path:'/shop',
                    redirect:'/shop/goods'
                },
                {
                    path:'/shop/goods',
                    component:shopGoods
                },
                {
                    path:'/shop/rating',
                    component:shopRating
                },
                {
                    path:'/shop/info',
                    component:shopInfo
                }
            ]
        }
    ]
})
