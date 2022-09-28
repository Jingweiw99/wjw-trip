<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in 100" >
        {{item}}cuole 
      </template>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
