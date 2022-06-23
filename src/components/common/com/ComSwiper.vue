<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(img, index) in imgList" :key="index" class="swiper-slide">
        <img :src="`${cloudImageUrl}${img}`" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
export default {
  name: 'ComSwiper',
  components: {},
  filters: {},
  props: {
    imgList: { type: Array, default: () => [] },
  },
  data() {
    return {
      swiper: null,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.swiperInit()
  },
  methods: {
    swiperInit() {
      this.swiper = new window.Swiper('.swiper', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        speed: 800,
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    },
  },
}
</script>
<style lang="less" scoped>
.swiper {
  img {
    width: 100%;
  }
}
</style>
