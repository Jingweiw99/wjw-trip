<template>
  <div class="home">
    <h2>home</h2>
 
  </div>
</template>

<script setup>
import { ref } from 'vue'
const ratevValue = ref(0)
const reteIncrement = function () {
  ratevValue.value++
}
</script>

<style lang="less" scoped>

</style>

