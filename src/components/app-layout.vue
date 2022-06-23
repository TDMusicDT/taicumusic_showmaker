<template>
  <div>
    <app-header></app-header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      © 2020-2022 TaicuMusic Copyright 版权所有
    </footer>
  </div>
</template>

<script>
import AppHeader from './app-header.vue'

export default {
  components: { AppHeader },
}
</script>

<style lang="less" scoped>
.app-main {
  padding-top: 70px;
}

.app-footer {
  text-align: center;
  font-size: 12px;
  color: #ccc;
  margin-bottom: 40px;
}
</style>
