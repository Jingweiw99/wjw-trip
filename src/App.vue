<template>
  <div class="app">
    <router-view />
    <Tabbar />
    <Loading />
  </div>

  
</template>

<script setup>
import Tabbar from './components/tabbar/tab-bar.vue'
import Loading from './components/loading/loading.vue';
</script>
  

<style scoped>

</style>
