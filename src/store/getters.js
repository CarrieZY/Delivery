
export  const getters ={
    //计算中数量
    totalCount(state){
        return state.shopCart.reduce((preTotal,food) =>{
            return preTotal + food.count
        },0)
    },
    //计算总价格
    totalPrice(state){
        return state.shopCart.reduce((preTotal,foos) =>{
            return preTotal + food.count*food.price
        })
    }
}