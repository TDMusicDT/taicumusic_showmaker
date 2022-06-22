<template>
  <div class="com-music">
    <div class="com-music__title"></div>
    <div class="com-music__items"></div>
  </div>
</template>
<script>
export default {
  name: 'ComMusic',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      musicObject: {
        title: '最新单曲',
        buttonName: '点击试听更多',
        items: [
          {
            imgSource:
              'https://user-assets.sxlcdn.com/images/402037/FjEvX7sdh5odpQ0soLlQPRU-anNo.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg',
            label: '浩瀚星海',
            imgHref: 'https://y.qq.com/n/ryqq/songDetail/002yvUvH4RVyT7',
            authors: [
              {
                name: '丁芙妮',
                href: null,
              },
            ],
          },
          {
            imgSource:
              'https://user-assets.sxlcdn.com/images/869682/FlHsBvE_FTo8aknfrNtlVLQzrPgY.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg',
            label: '自娱自乐',
            imgHref: 'https://y.qq.com/n/ryqq/songDetail/002yvUvH4RVyT7',
            authors: [
              {
                name: '金志文',
                href: null,
              },
            ],
          },
          {
            imgSource:
              'https://user-assets.sxlcdn.com/images/402037/FkeNbQOKL9vQ_0RBPTxH70-qXpqR.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg',
            label: '不如',
            imgHref: 'https://y.qq.com/n/ryqq/songDetail/002yvUvH4RVyT7',
            authors: [
              {
                name: '秦海清',
                href: null,
              },
            ],
          },
          {
            imgSource:
              'https://user-assets.sxlcdn.com/images/402037/Ftc9dJhx5xiRA6zdcV66jn26q-Af.jpeg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/interlace/1/format/jpeg',
            label: '落日与晚风',
            imgHref: 'https://y.qq.com/n/ryqq/songDetail/002yvUvH4RVyT7',
            authors: [
              {
                name: 'IN-K',
                href: 'https://y.qq.com/n/ryqq/singer/002yupVT2XEFaA',
              },
              {
                name: '王忻辰',
                href: 'https://y.qq.com/n/ryqq/singer/004W8PqQ0EYrEr',
              },
              {
                name: '苏星婕',
                href: 'https://y.qq.com/n/ryqq/singer/002lKaDq2lLLtk',
              },
            ],
          },
          {
            imgSource:
              'https://user-assets.sxlcdn.com/images/869682/FkpUtouQkZ5IojeKnbo1dvoEG8EV.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpeg',
            label: '放空',
            imgHref: 'https://y.qq.com/n/ryqq/songDetail/002yvUvH4RVyT7',
            authors: [
              {
                name: 'A1 TRIP',
                href: 'https://y.qq.com/n/ryqq/singer/002yupVT2XEFaA',
              },
              {
                name: '大籽',
                href: 'https://y.qq.com/n/ryqq/singer/004W8PqQ0EYrEr',
              },
              {
                name: 'Lil E',
                href: 'https://y.qq.com/n/ryqq/singer/002lKaDq2lLLtk',
              },
            ],
          },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
.com-music {
  padding: 0 80px;
  padding-bottom: 55px;
  &__title {
  }
  &__items {
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin: 60px auto 0;
      background: url(/images/line-shadow.320a0ef….png) no-repeat 50%;
      height: 10px;
      background-size: contain;
      width: 1040px;
      max-width: 94%;
    }
  }
}
</style>
