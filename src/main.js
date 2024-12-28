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
    countX: state => {
      return state.countX;
    },
    countDouble: state => {
      return state.countX * 2;
    }
  },
  mutations: {
    increment (state) {
      state.countX++
    },
    decrement (state) {
      state.countX--
    },
    incrementByValue (state, value) {
      state.countX += Number(value)
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
