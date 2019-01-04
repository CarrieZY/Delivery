import {ADD_FOOD_COUNT,REMOVE_FOOD_COUNT,CLEAR_CART} from './mutation-types'

import Vue from 'vue'
export default {
    [ADD_FOOD_COUNT](state,{food}){
        console.log(state)
        if(!food.count){
            //给有数据绑定的对象添加指定属性名和值
            Vue.set(food,'count',1);//添加到购物车中
            state.foodsCart.push(food)
        }else{
            food.count++
        }
    },
    [REMOVE_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count===0){ //如果数量为0时 从购物车中移除
                state.foodsCart.splice(state.foodsCart.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        state.foodsCart.forEach(food => food.count=0)
        state.foodsCart = []
    }
}
