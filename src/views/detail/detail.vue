<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="backToHome" />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <h2>houseId: {{ $route.params.id}}</h2>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from "@/stores/modules/detail"
import { storeToRefs } from 'pinia';
import { computed } from '@vue/reactivity';
import DetailSwipe from './cpns/detail-swipe.vue'

const route = useRoute()
const router = useRouter()
// 监听点击按钮的返回
const backToHome = () => {
  router.back()
}
// 发送网络请求
const houseId = route.params.id
const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)
const mainPart = computed(() =>
  (detailInfos.value.mainPart)
)

detailStore.fetchDetailInfos(houseId)
</script>

<style lang="less" scoped>

</style>
