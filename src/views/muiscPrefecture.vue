<template>
  <section>
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
