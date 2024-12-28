export default {
    increment (state) {
      state.countX++
    },
    decrement (state, value = 0) {
      state.countX -= value
    },
    incrementByValue (state, value = 0) {
      state.countX += Number(value)
    }
  }
