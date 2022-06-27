<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a href="/">
          <img src="@/assets/logo.png" class="logo-img" data-description="" />
        </a>
        <!-- <div class="logo-text">
          <p><em>音乐无处不在</em></p>
        </div> -->
      </div>
      <ul class="nav-container">
        <li
          class="menu-dropdown"
          :class="{ active: currentPath === nav.path }"
          v-for="nav in navs"
          :key="nav.label"
          @click="handleNavChange(nav)"
        >
          <span class="s-font-body">{{ nav.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      currentPath: '/home',
      navs: [
        { label: '首页', path: '/home' },
        { label: '发现', path: '/find' },
      ],
    }
  },
  created() {
    this.currentPath = this.$route.path
  },
  methods: {
    handleNavChange(nav) {
      this.currentPath = nav.path
      this.$router.push({ path: nav.path })
    },
  },
}
</script>

<style lang="less" scoped>
.header-wrapper {
  position: fixed;
  zoom: 1;
  padding: 8px 0;
  top: 0;
  z-index: 210;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
  min-height: 70px;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 1064px;
    margin: 0 auto;
    min-height: 54px;
  }

  .logo-container {
    display: flex;
    align-items: center;
    .logo-img {
      max-height: 40px;
    }

    .logo-text {
      font-size: 21px;
      vertical-align: middle;
      max-width: 200px;
      margin-left: 20px;
    }
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;

    .menu-dropdown {
      margin-left: 40px;
      color: #666;
      cursor: pointer;
      &.active {
        color: #9d9dd5;
      }
    }
  }
}
</style>
