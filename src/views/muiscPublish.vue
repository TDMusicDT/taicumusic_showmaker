<template>
  <section>
    <section class="section-1">
      <div class="blurred-layer"></div>
      <div class="text">
        <em>音乐宣发</em>
      </div>
      <div class="desc">
        <p>
          当你的歌曲被下载或在世界范围内播放时，你可能会获得你甚至不知道的版税。HikoonMusic将为您提供并收取这些版税。
        </p>
      </div>
    </section>
    <div class="section-container">
      <section class="section">
        <div class="pub">
          <h1 class="title">如何发行</h1>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  name: 'muiscPublish',
  components: {},
  filters: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.section-1 {
  position: relative;
  width: 100vw;
  height: 470px;
  background-repeat: no-repeat;
  background-size: 1905px 1071.56px;
  background-color: transparent;
  background-position: 0px -152.281px;
  background-image: url('https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/muiscPublish/png (5).png');
  background-attachment: fixed;

  .blurred-layer {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    line-height: 1;
    backdrop-filter: blur(1px);
    transition: all 0.2s ease-in 0s;
  }

  .text,
  .desc {
    width: 60vw;
    position: absolute;
    z-index: 2;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 45px;
    text-align: left;
  }

  .desc {
    top: 50%;
    font-size: 20px;
  }
}
</style>
