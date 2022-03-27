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
    var config = {
      headers: {
           'Content-type': 'text/plain',
           'Access-Control-Allow-Headers': '*',
           'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Methods':'GET',
         }
   };
      try {
        const res  = await fetch('https://xkcd.com/500/info.0.json',config)
        const data = await res.json()
        commit('SET_COMICS', JSON.stringify(data))
       
      } catch (error) {
        console.log("Error en el actions get commits")
      }
    }
  }
})

