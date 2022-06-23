<template>
  <section>
    <com-swiper :img-list="bannerList" />
    <com-music :data="musicObject" />
    <com-music :data="top10" />
    <com-music :data="singles" />
    <com-music :data="ancientCustoms" />
    <com-music :data="personality" />
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
      // 最新单曲
      musicObject: PARAMS.new_music,
      // top10好歌
      top10: PARAMS.top_10,
      // 流行单曲
      singles: PARAMS.pop_singles,
      // 古风国风
      ancientCustoms: PARAMS.ancient_customs,
      // 个性说唱
      personality: PARAMS.personality,
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
