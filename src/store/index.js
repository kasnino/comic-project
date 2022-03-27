import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      count: 1,
      comics: []
     }
  },
  mutations: {
    INCREMENT_COMIC (state) {
      state.count++
    },

    DECREMENT_COMIC (state) {
      if(state.count != 1)
      state.count--
    },

    SET_COMICS (state, payload){
      state.comics = payload
    }
  },
  actions:{
    
   async GET_COMICS({commit}){
      try {
        const res  = await fetch('/api/100/info.0.json')
        const data = await res.json()
        // console.log(data)
        commit('SET_COMICS', data)
       
      } catch (error) {
        console.log("Error en el actions get commits")
      }
    }
  }
})

