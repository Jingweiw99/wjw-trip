<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabberData">
    <div
      class="tab-bar-item"
      :class="{active:currentIndex === index}"
      @click = "itemClick(item)"
    >
      <img
      v-if="currentIndex !== index"
       :src="getAssetURL(item.image)" 
        alt="">
        <img v-else :src="getAssetURL(item.imageActive)" alt="">
      <span class="text">{{item.text}}</span>
    </div>
    </template>
  </div>
</template>

<script setup>
import tabberData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load_assets"
import { ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"

const currentIndex = ref(0)
const router =  useRouter()
const route = useRoute()
const itemClick = (item) => {
  router.push(item.path)
}
watch(route, (newRoute) => {
  const index = tabberData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})

 

</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

  border-top: 1px solid #f3f3f3;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    
    &.active{
      color: var(--primary-color)
    }

    img {
      width: 36px;
    }
    
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}

</style>
