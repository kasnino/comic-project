<script setup>
 import { useStore } from 'vuex'
 import { ref, computed, onMounted } from 'vue'

  defineProps({
    msg: String
  })

  const store = useStore()
  const count  = computed(() => store.state.count);
  const comics = computed(() => store.state.comics);

  // Methods interno ciclo de vida
  onMounted(() => {
   store.dispatch('GET_COMICS');
  })

  // Methods
  function incrementCount() {
      store.commit('INCREMENT_COMIC')
  }

  function decrementCount() {
      store.commit('DECREMENT_COMIC')
  }

  
</script>

<template>
<div class="grid grid-cols-1 gap-4">
  <div v-if="comics"  class=" text-center p-4 "> 
   
      
 :{{ comics}}
  <img :src="comics.img" width="350" height="350"/>
     
         
      
     
  
   
  <button @click="incrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
  Next +
</button>
 
   <button @click="incrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
  Random
</button>

  
  <button @click="decrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
   Prev -</button>

  <button @click="incrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
  Firts
</button>

  <button @click="incrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
  Lats +
</button>
  </div>

</div>


</template>

<style scoped>
a {
  color: #42b983;
}
</style>
