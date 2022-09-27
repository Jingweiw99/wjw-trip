<template>
  <div class="city top-page">
    <!-- 上层 -->
    <div class="top">
      <!-- 1. 搜索框 -->
      <van-search v-model="searchValue" placeholder="请输入搜索关键词" shape="round" show-action @search="onSearch"
        @cancel="onCancel" />
      <!-- 2. tab的切换 -->
      <van-tabs v-model:active="active" color="var(--primary-color)" :line-height="3">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 内容 -->
    <div class="context">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="active === key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router'

import CityGroup from './cpns/city-group.vue'

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
// 选中标签后的数据
const currentGroup = computed(() => allCities.value[active.value])

</script>

<style lang="less" scoped>
.city {

  .top {
    position: relative;
    z-index: 999;
  }

  .context {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
