<template>
    <div>
           <div class="flex mt-2  align-end rounded h-10 justify-end text-end w-100 inline-flex">
                    <svg  class="cursor-pointer relative z-0 mt-3 w-6 h-10 " 
                          v-for="(item, index) in start" 
                          :key ="index" 
                          @click="changeRankingStart(index)"
                     
                       >
                    <path  d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                    </svg>
                     
            </div>
    </div>
<!--      v-on:mouseover="star_over(index)" 
                          v-on:mouseout="star_out()" -->
</template>

<script setup>
import { ref } from "vue";

const startColor = ref("#FFFF00")
const bandera    = ref(false)
const start      = ref(['0','1','2','3','4','5','6'])
const result = ref([])


function changeRankingStart(startID)
{
  alert("Click en la posicion" + startID)
  this.result = this.start.slice(0, startID+1)
  alert(this.result)
  this.start = this.result
}

function star_over(rating)
{
    return  alert("Click en la posicion" )
}

function star_out()
{
    return  alert("Click en la posicion" )
}

</script>

<style lang="scss" scoped > 

.color-start{
    color:#FFFFFF;
    fill:v-bind(startColor);
}
</style>