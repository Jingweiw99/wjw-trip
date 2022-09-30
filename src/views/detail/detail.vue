<template>
  <div class="detail top-page">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="backToHome" />
    <h2>houseId: {{ $route.params.id}}</h2>
    {{detailInfos}}
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import useDetailStore from "@/stores/modules/detail"
import { storeToRefs } from 'pinia';

const route = useRoute()
const router = useRouter()
// 监听点击按钮的返回
const backToHome = () => {
  router.back()
}
// 发送网络请求
const houseId = route.params.id
const detailStore = useDetailStore()
detailStore.fetchDetailInfos(houseId)

const { detailInfos } = storeToRefs(detailStore)

</script>

<style lang="less" scoped>

</style>
