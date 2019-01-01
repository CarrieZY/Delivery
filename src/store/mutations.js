import*as types from './mutation-types'

const mutations = {
    [types.ADD_FOOD_COUNT](state,{food}){
        if(!food.count){
            Vue.set(food,'count',1)
            state.shopCart.push(food)
        }else{
            food.count++
        }
    },
    [types.REMOVE_FOOD_COUNT](state,{food}){
        if(food.count){
            food.count--
            if(food.count===0){
                state.shopCart.splice(state.shopCart.indexOf(food),1)
            }
        }
    }
}

export default mutations