import Vue from 'vue'
import Vuex from 'vuex'
import buyers from './modules/buyers'
import sales from './modules/sales'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    buyers,
    sales
  }
})
