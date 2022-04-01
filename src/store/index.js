import { createStore } from "vuex";

export default createStore({
  state () {
    return {
      count: 766,
      comics: [],
      ramdomID: 100,
      minID: 1,
      maxID: 2426,
      rating: 0,
      comics_views: [],
      loading: false,
      URL_API: '/api/',
      PATH_URL: '/info.0.json',
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
    },

    NUM_ALEATORIO (state){
      state.count = Math.floor(Math.random() * (state.maxID - state.minID + 1)) + state.minID;
    },

    COMICS_VIEWS (state){
      state.comics_views = state.comics_views.push(state.comics)
    },

    LOADING_DATA(state, loadingStatus){
      state.loading = loadingStatus
    },

    SEARCH_ID(state, payload){
      state.count = payload
    }
  },
  actions:{
    
   async GET_COMICS({commit, state}){
    commit('LOADING_DATA', true)
      try {
        const res  = await fetch(`https://xkcd.com/${state.count}/info.0.json`)
        const data = await res.json()
          commit('SET_COMICS', data)
          commit('LOADING_DATA',false)
      } catch (error) {
        console.log("Error en el actions get commits")
      }
    }
  }
})

