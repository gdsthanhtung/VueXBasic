import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countX: 10,
    valueX: 1000
  },
  getters: {
    countDouble: state => {
      return state.countX * 2;
    }
  },
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
