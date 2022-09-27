<template>
  <div class="city top-page">
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" show-action @search="onSearch"
      @cancel="onCancel" />

    <van-tabs v-model:active="active" color="var(--primary-color)" :line-height="3">
      <template v-for="(value, key, index) in allCity" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCityAll } from '@/services'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';

const router = useRouter()
const searchValue = ref('');
const active = ref(0);
const onSearch = (val) => {
  console.log("search", val)
};
const onCancel = () => {
  router.back()
};

// 从city中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)


</script>

<style lang="less" scoped>

</style>
