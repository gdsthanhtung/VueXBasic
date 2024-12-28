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
    decrement (state, value = 0) {
      state.countX -= value
    },
    incrementByValue (state, value = 0) {
      state.countX += Number(value)
    }
  },
  actions: {
    incrementAsync ({ commit, dispatch }) {
      console.log('incrementAsync');
      setTimeout(() => {
        commit('increment')
        dispatch('testActionCallAction');
      }, 1000)
    },
    decrementAsync ({ commit }, param) {
      setTimeout(() => {
        commit('decrement', param.number)
      }, param.time)
    },
    incrementByValueAsync ({ commit }, param) {
      setTimeout(() => {
        commit('incrementByValue', param.number)
      }, param.time)
    },
    testActionCallAction ({ commit }) {
      console.log('testActionCallAction');
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
