<script setup>
 import { useStore } from 'vuex'
 import { ref, computed, onMounted } from 'vue'

  defineProps({
    msg: String
  })

  const store = useStore()

  function incrementCount() {
      store.commit('INCREMENT_COMIC')
  }

  function decrementCount() {
      store.commit('DECREMENT_COMIC')
  }

  const count  = computed(() => store.state.count);
  const comics = computed(() => store.state.comics);

  onMounted(() => {
   store.dispatch('GET_COMICS');
  })
</script>

<template>
<div class="grid grid-cols-1 gap-4">
  <div class=" text-center p-4 h-auto">



      <pre v-if="comics">
        {{comics}}
      </pre>
       <h1 class="text-3xl font-bold text-white ">
  </h1>
  <button @click="incrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
  +
</button>
 
   count is: {{ count }}
  
  <button @click="decrementCount" class="bg-pink-500  hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
    -</button>


  </div>

</div>


</template>

<style scoped>
a {
  color: #42b983;
}
</style>
