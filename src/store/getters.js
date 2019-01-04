
export default {
    //计算总数
    totalCount(state){
        return state.foodsCart.reduce((preTotal,food) =>{
            return preTotal+food.count
        },0)
    },
    //计算总价
    totalPrice(state){
        return state.foodsCart.reduce((preTotal,food) =>{
            return preTotal+food.count*food.price
        },0)
    }
}
