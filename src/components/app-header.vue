<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <img
          src="https://digiads-icon.ks3-cn-guangzhou.ksyuncs.com/default/digiads_logo.png"
          class="logo-img"
          data-description=""
        />
        <div class="logo-text">
          <p><em>音乐无处不在</em></p>
        </div>
      </div>
      <ul class="nav-container">
        <li class="menu-dropdown">
          <a class="s-nav-item" target="_self" href="/"
            ><span class="s-font-body">首页</span></a
          >
        </li>
        <li class="menu-dropdown">
          <a class="s-nav-item" target="_self" href="/7"
            ><span class="s-font-body">艺人服务</span></a
          >
        </li>
        <li class="menu-dropdown">
          <a class="s-nav-item" target="_self" href="/3"
            ><span class="s-font-body">音乐发行</span></a
          >
        </li>
        <li class="menu-dropdown">
          <a class="s-nav-item selected" target="_self" href="/5"
            ><span class="s-font-body">音乐专区</span></a
          >
        </li>
        <li class="menu-dropdown">
          <a class="s-nav-item" target="_self" href="/6"
            ><span class="s-font-body">关于我们</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {}
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
      margin-left: 20px;
      a {
        color: #666;
      }
    }
  }
}
</style>
