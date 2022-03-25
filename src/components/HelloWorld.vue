<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(10)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    |
    <a href="https://v3.vuejs.org/" target="_blank"> Vue 3 Documentation</a>
      |
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>

</template>

<style scoped>
a {
  color: #42b983;
}
</style>
