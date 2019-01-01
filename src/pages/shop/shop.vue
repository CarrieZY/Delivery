<template>
    <div class="shop">
        <shop-header :info="info"></shop-header>
        <router-view/>
    </div>
</template>

<script>
import shopHeader from './shopHeader'
import axios from 'axios'
export default {
    components:{
        shopHeader
    },
    data(){
        return {
            info:{}
        }
    },
    created(){
        axios.get('static/data.json').then((res) =>{
            this.info=res.data.info
        })
    }
}
</script>

<style lang="scss" scoped>
</style>
