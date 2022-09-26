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

    <van-tabs v-model:active="active" color="var(--primary-color)" :line-height="3">
      <van-tab title="国内‧港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCityAll } from '@/services'

const router = useRouter()

const searchValue = ref('');
const active = ref(0);


const onSearch = (val) => {
  console.log("search",val)
};
const onCancel = () => {
  router.back()
};
// 获取城市的所有数据
getCityAll().then(res => {
  console.log(res.data)
})

</script>

<style lang="less" scoped>

</style>
