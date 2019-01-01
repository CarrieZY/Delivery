export default {
    addFoodCount({commit},{food,isAdd}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(REMOVE_FOOD_COUNT,{food})
        }
    }
}