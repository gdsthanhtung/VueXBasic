export default {
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
