<template>
  <div>
    <app-header></app-header>
    <main class="app-main">
      <router-view />
    </main>
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
</style>
