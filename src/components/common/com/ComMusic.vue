<template>
  <div class="com-music">
    <div class="com-music__title">
      <h2>
        <i>{{ data.title }}</i>
      </h2>
    </div>
    <div class="com-music__items">
      <template v-for="(item, index) in data.items">
        <div class="com-music__items_item" :key="index">
          <div class="item-img">
            <img :src="cloudImageUrl + item.imgSource" :alt="item.label" />
          </div>
          <div class="item-title">
            <span>{{ item.label }}</span>
          </div>
          <div class="item-authors">{{ item.authors | authorFilter }}</div>
        </div>
      </template>
      <div class="com-music__items_item btn-more">
        <div class="item-img">
          <a :href="data.buttonHref">
            <img :src="`${cloudImageUrl}com_music_play.png`" alt="Music Play" />
          </a>
        </div>
        <div class="item-title">
          <a :href="data.buttonHref">{{ data.buttonName }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComMusic',
  components: {},
  filters: {
    authorFilter(names) {
      let nameResult = ''
      for (const name of names) {
        if (name?.name && nameResult) nameResult += ' / '
        nameResult += name.name
      }
      return nameResult
    },
  },
  props: {
    data: { type: Object, default: () => {} },
  },
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
@import '@/assets/global.less';
.com-music {
  padding: 80px 0;
  padding-bottom: 55px;
  width: 1088px;
  margin: 0 auto;
  // 标题
  &__title {
    text-align: left;
    font-size: 36px;
    margin: 0 12px;
    color: @color-font;
    margin-bottom: 30px;
  }
  // item 列表
  &__items {
    display: flex;
    position: relative;
    flex-flow: row wrap;
    justify-content: flex-start;
    &_item {
      width: 157px;
      height: 237px;
      margin: 0 12px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-content: center;
      .item {
        //item 图片
        &-img {
          img {
            width: 157px;
            height: 157px;
          }
        }
        // item 标题
        &-title {
          font-size: 24px;
          font-weight: bold;
        }
      }
      // 更多按钮
      &.btn-more {
        justify-content: flex-start;
        // item 标题
        .item-title {
          font-size: 14px;
          font-weight: bold;
          a:hover {
            color: #ff8529;
          }
        }
      }
    }
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 60px auto 0;
    background-image: url('https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/com_music_bottom_line.png');
    background-repeat: no-repeat;
    background-size: 50%;
    height: 10px;
    background-size: contain;
    width: 1040px;
    max-width: 94%;
  }
}
</style>
