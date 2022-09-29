<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue"
import HomeSearchBox from "./cpns/home-search-box.vue"
import useHomeStore from '@/stores/modules/home';
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategorysData()
homeStore.fetchHouselistData()

// 监听window窗口的滚动
window.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  if (clientHeight + scrollTop >= scrollHeight) {
    homeStore.fetchHouselistData()
  }
})
</script>

<style lang="less" scoped>
.banner {
  
  img {
    width: 100%;
  }
}



</style>

