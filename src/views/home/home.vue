<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <div class="search-bar" v-if="isShowSearchBar">我是搜索框内容</div>
    <home-content />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "./cpns/home-search-box.vue"
import useHomeStore from '@/stores/modules/home';
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import useScroll from "@/hooks/useScroll"
import { watch,ref,computed } from "vue";

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategorysData()
homeStore.fetchHouselistData()

// 监听window窗口的滚动（已经抽取）
// const scrollListenerHandler = function () {
//   const clientHeight = document.documentElement.clientHeight
//   const scrollTop = document.documentElement.scrollTop
//   const scrollHeight = document.documentElement.scrollHeight
//   if (clientHeight + scrollTop >= scrollHeight) {
//     homeStore.fetchHouselistData()
//   }
// }
// onMounted(() => {
//   window.addEventListener("scroll", scrollListenerHandler)
// })
// // 离开页面的时候需要移除监听
// onUnmounted(() => {
//   window.removeEventListener("scroll", scrollListenerHandler)
// })
const { isReachBottom,scrollTop } = useScroll()
watch(isReachBottom,(newVal) => {
  if(newVal) homeStore.fetchHouselistData()
  isReachBottom.value = false
})
//搜索框显示控制
// const isShowSearchBar = ref(false)
// watch(isShowSearchBar, (newTop) => {
//   isShowSearchBar.value = newTop > 360
// })
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

</script>

<style lang="less" scoped>
.banner {

  img {
    width: 100%;
  }
}
</style>

