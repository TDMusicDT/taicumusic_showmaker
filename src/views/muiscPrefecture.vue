<template>
  <section>
    <com-swiper :img-list="bannerList" />
    <com-music :data="musicObject" />
  </section>
</template>
<script>
import PARAMS from '@/parmas'
export default {
  name: 'muiscPrefecture',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      musicObject: PARAMS.new_music,
      bannerList: [
        'jpeg (1).jpg',
        'jpeg (2).jpg',
        'jpeg (4).jpg',
        'jpeg (3).jpg',
        'jpeg (41).jpg',
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.swiperInit()
  },
  methods: {},
}
</script>
<style lang="less" scoped></style>
