<template>
  <section>
    <com-swiper :img-list="bannerList" />
    <com-music :data="musicObject" />
    <com-music :data="top10" />
    <com-music :data="singles" />
    <com-music :data="ancientCustoms" />
    <com-music :data="popSingles" />
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
      top10: PARAMS.top_10,
      singles: PARAMS.pop_singles,
      ancientCustoms: PARAMS.ancient_customs,
      popSingles: PARAMS.pop_singles,
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
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped></style>
