import {ADD_FOOD_COUNT,REMOVE_FOOD_COUNT,CLEAR_CART} from './mutation-types'

export default {
    updataFoodCount({commit},{food,isAdd}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(REMOVE_FOOD_COUNT,{food})
        }
    },
    clearCart({commit}){
        commit(CLEAR_CART)
    }
}