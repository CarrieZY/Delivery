<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
    <m-footer v-show="$route.meta.showFooter"></m-footer>
  </div>
</template>

<script>
import MFooter from 'components/footer/footer'
export default {
  name: 'App',
  components:{
    MFooter
  }
}
</script>

<style>

</style>
