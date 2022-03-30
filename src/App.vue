
<script setup>
   import HelloWorld from './components/HelloWorld.vue'
   import Header from './components/Header.vue'
</script>

<template>
<div class="contenedor flex flex-col p-0 h-full ">
    <div class="sombra p-0 m-0"></div>
    <Header/>
    <HelloWorld class="contenido-interno" msg="Hello Vue 3 + Vite  + Tailwinds  " />
</div>
</template>

<style>

body{
    padding:0px;
    margin:0px;
  width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0) linear-gradient(280deg, 
    rgba(255, 255, 255, 0) -59.17%, rgb(18, 20, 29) 55.09%) repeat scroll 0% 0%;
}
.contenedor {
    background-image: url("./assets/Kanojo-mo-Kanojo_banner_znolv6.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    width: 100%;
    height:100%;
    z-index: 1;
    position:relative;
}

.sombra{
   
    position: absolute;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0, 0) linear-gradient(280deg, 
    rgba(255, 255, 255, 0) -59.17%, rgb(18, 20, 29) 55.09%) repeat scroll 0% 0%;
    z-index: 2;
}

.contenido-interno{
    z-index: 3;
    position:relative
}
</style>
