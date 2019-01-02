import {ADD_FOOD_COUNT,REMOVE_FOOD_COUNT,CLEAR_CART} from './mutation-types'

import Vue from 'vue'
const mutations = {
    [ADD_FOOD_COUNT](state,{food}){
        if(!food.count){
            Vue.set(food,'count',1)
            state.shopCart.push(food)
        }else{
            food.count++
        }
    },
    [REMOVE_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count===0){
                state.shopCart.splice(state.shopCart.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        state.shopCart.forEach(food => food.count=0)
        state.shopCart = []
    }
}

export default mutations