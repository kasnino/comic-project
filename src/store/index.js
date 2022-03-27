import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },

    decrement (state) {
      if(state.count != 0)
      state.count--
    }
  }
})

