import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './state'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions
})