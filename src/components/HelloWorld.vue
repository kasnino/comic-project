<script setup>
 import { useStore } from 'vuex'
 import { ref, computed } from 'vue'

  defineProps({
    msg: String
  })

  const store = useStore()

  function incrementCount() {
      store.commit('increment')
  }

  function decrementCount() {
      store.commit('decrement')
  }

   const count = computed(() => store.state.count);
</script>

<template>
  <h1 class="text-cyan">{{ msg }}</h1>
 <h1 class="text-3xl font-bold text-white ">
    Hello world!
  </h1>
  <button type="button" @click="incrementCount">+</button>
   count is: {{ count }}
  <button type="button" @click="decrementCount">-</button>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
