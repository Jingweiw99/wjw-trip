<template>
  <div class="app">
    <router-view />
    <Tabbar />
  </div>

  
</template>

<script setup>
import Tabbar from './components/tabbar/tab-bar.vue'
import { useRoute } from "vue-router";

const route = useRoute()
</script>
  

<style scoped>

</style>
