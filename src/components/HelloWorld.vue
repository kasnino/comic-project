<script setup>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
import EsqueletonLoading from './EsqueletonLoading.vue'
import SearchComics from './SearchComics.vue'
import StartRanking from './StartRanking.vue'
import StarRating from 'vue-star-rating'

defineProps({
  msg: String
});

const store    = useStore();
const count    = computed(() => store.state.count);
const comics   = computed(() => store.state.comics);
const loading  = computed(() => store.state.loading);
const rating   = computed(() => store.state.rating);
// Methods interno ciclo de vida
onMounted(() => {
  store.dispatch("GET_COMICS");
});

// Methods
function incrementCountComics() {
  store.commit("INCREMENT_COMIC");
  store.dispatch("GET_COMICS");
}

function decrementCountComics() {
  store.commit("DECREMENT_COMIC");
  store.dispatch("GET_COMICS");
}

function numeroAleatorio() {
  store.commit("NUM_ALEATORIO");
  store.dispatch("GET_COMICS");
}

</script>

<template>
  <div class="contenido-main bg-transparent h-screen items-center justify-center">
    <div class=" flex flex-col h-100 items-center text-white">
          <div v-if="loading" class="loading">
              <EsqueletonLoading/>
                
          </div>
      <div v-else class=" text-center  text-white p-4">
        <h1 class="text-4xl font-medium leading-tight text-gray-600 mb-2.5 underline mt-0"> {{ comics.title }}</h1>
        <div class="p-4 text-center flex items-center justify-center w-full">
          <div class="flex items-center justify-center">
            <div class="grid md:grid-cols-3 items-center">
              <div>
              </div>
              <div class="w-100 p-5 mt-2 ">
                <div class="flex flex-col shadow-lg shadow-gray-600 rounded-lg justify-center align-center shadow-lg">
                  <figure>
                    <img
                      height="600"
                      :src="comics.img"
                      :alt="comics.alt"
                      class="object-cover rounded-md object-center w-full rounded"
                    />
                  </figure>
             
                </div>
                <div class="mt-2 w-100  text-center flex justify-center">
                    <!-- Start ranking -->
                    <star-rating 
                    v-model:rating="rating"
                     v-bind:star-size="40"
                     :animate="true"
                    ></star-rating>
                </div>
                <div class="mt-5  ">
                  <span class="p-6 ">
                  <button
                  @click="decrementCountComics"
                  class="inline-block cursor-pointer hover:cursor-pointer focus:bg-purple-800 rounded-full bg-gray-900 hover:bg-purple-600 text-white font-bold leading-normal border-b-4 border-purple-700 hover:border-purple-500 uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out md:w-20 md:h-20"
                >Prev +</button>
                  </span>
                <span
                  class="text-xs inline-block py-1 mt-5 md:px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full"
                >comic ID · #{{ count }} ·
                </span>
               <span class="p-6">
                   <button
                  @click="incrementCountComics"
                  class="inline-block focus:bg-purple-800 rounded-full bg-gray-900 hover:bg-purple-600 text-white font-bold leading-normal border-b-4 border-purple-700 hover:border-purple-500 uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out md:w-20 md:h-20"
                >Next +</button>
                  </span>
                  </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-5">
          <div class="p-4 text-center flex items-center justify-center w-full">
            <button
              @click="numeroAleatorio"
              class="bg-gray-900 shadow-lg shadow-indigo-500/50 hover:bg-indigo-800 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded"
            >Random</button>
          </div>
        </div>
      </div>
   
    </div>
     <!-- SearchComics -->
    <SearchComics/>
  </div>
</template>

<style lang="css" scoped>
a {
  color: #42b983;
}

.contenido-main {
  z-index: 3;
}
</style>
