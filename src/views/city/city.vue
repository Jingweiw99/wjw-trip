<template>
  <div class="city top-page">
      <van-search 
        v-model="searchValue" 
        placeholder="请输入搜索关键词" 
        shape="round"
        show-action
        @search="onSearch"
        @cancel="onCancel"
       />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchValue = ref('');
const onSearch = (val) => {
  console.log("search",val)
};
const onCancel = () => {
  router.back()
};


</script>

<style lang="less" scoped>
.city {}
</style>
