<template>
  <div class="com-music" :class="{ line: data.showLine !== false }">
    <div class="com-music__title">
      <h2>
        <i>{{ data.title }}</i>
      </h2>
    </div>
    <div class="com-music__items" :class="{ case: data.case }">
      <template v-for="(item, index) in data.items">
        <div class="com-music__items_item" :key="index">
          <div class="item-img">
            <img :src="cloudImageUrl + item.imgSource" :alt="item.label" />
          </div>
          <div class="item-title" v-if="item.label">
            <span>{{ item.label }}</span>
          </div>
          <div class="item-authors" v-if="item.authors">
            {{ item.authors | authorFilter }}
          </div>
          <div class="item-desc" v-if="item.desc">
            <span>{{ item.desc }}</span>
          </div>
        </div>
      </template>
      <div class="com-music__items_item btn-more" v-if="data.showMore">
        <div class="item-img">
          <a :href="data.buttonHref || defaultLink">
            <img :src="`${cloudImageUrl}com_music_play.png`" alt="Music Play" />
          </a>
        </div>
        <div class="item-title">
          <a :href="data.buttonHref || defaultLink">{{
            data.buttonName || defaultLinkText
          }}</a>
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
        if (name.name) {
          if (name?.name && nameResult) nameResult += ' / '
          nameResult += name.name
        } else {
          nameResult = nameResult
            ? nameResult + ' / ' + name
            : nameResult + name
        }
      }
      return nameResult
    },
  },
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      defaultLink: '/service',
      defaultLinkText: '点击了解更多...',
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
      //   height: 237px;
      margin: 0 12px;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-content: center;
      text-align: center;
      margin-bottom: 30px;
      .item {
        //item 图片
        &-img {
          img {
            width: 157px;
            height: 157px;
            border-radius: 4px;
            margin-bottom: 10px;
            border-radius: 4px;
            // cursor: pointer;
            transition: all 0.4s ease-in;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        // item 标题
        &-title {
          font-size: 20px;
          font-weight: 600;
          //   font-style: italic;
          margin-top: 10px;
          //   margin-bottom: 10px;
          color: @color-font;
        }
        &-authors {
          font-size: 13px;
          font-weight: 500;
          margin-top: 6px;
        }
        &-desc {
          font-size: 16px;
          margin-top: 6px;
        }
      }
      // 更多按钮
      &.btn-more {
        justify-content: flex-start;
        // item 标题
        .item-title {
          font-size: 16px;
          font-weight: bold;
          a:hover {
            color: #ff8529;
          }
        }
      }
    }
    &.case {
      justify-content: center;
    }
    &.case > &_item {
      width: 248px;
      .item {
        //item 图片
        &-img {
          img {
            width: 248px;
            height: 248px;
          }
        }
        // item 标题
        &-title {
          font-size: 24px;
          font-weight: normal;
        }
        &-authors {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
  &.line::after {
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
