
<script setup>
   import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <HelloWorld msg="Hello Vue 3 + Vite  + Tailwinds  " />
</template>

<style>
body {
    background-image: url("./assets/Kanojo-mo-Kanojo_banner_znolv6.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    width: 100%;
    height:100%;

}

.fondo--img{
   
}
body::after{

    content: "";
    position: absolute;
    inset: 0px;
    background: rgba(0, 0, 0, 0) linear-gradient(270deg, rgba(255, 255, 255, 0) -44.17%, rgb(18, 20, 29) 55.09%) repeat scroll 0% 0%;
    z-index: -1;
    height:100vh;
}
</style>
