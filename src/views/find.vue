<template>
  <div>
    <section class="section bg-gray">
      <div class="tabs">
        <div class="tab-header">
          <div
            class="title"
            :class="{ active: tab.value == currentTab }"
            v-for="tab in tabs"
            :key="tab.value"
            @click="currentTab = tab.value"
          >
            {{ tab.label }}
          </div>
        </div>
        <div class="tab-content">
          <div class="song-card-list" v-show="currentTab === '01'">
            <div class="song-card-item" v-for="i in songList1" :key="i.title">
              <img :src="cloudImageUrl + i.img" :alt="i.title" />
              <p class="title">{{ i.title }}</p>
              <p class="author">{{ i.author }}</p>
            </div>
          </div>

          <div class="song-card-list" v-show="currentTab === '02'">
            <div class="song-card-item" v-for="i in songList2" :key="i.title">
              <img :src="cloudImageUrl + i.img" :alt="i.title" />
              <p class="title">{{ i.title }}</p>
              <p class="author">{{ i.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'FindPage',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      currentTab: '01',
      tabs: [
        { value: '01', label: '原创' },
        { value: '02', label: '翻唱' },
        // { value: '03', label: '伴奏' },
      ],
      songList1: [
        { title: '今生相约', author: '远航', img: 'om_new_song_01.jpg' },
        {
          title: '冲锋的英雄',
          author: '孑匚懏蜀黍',
          img: 'om_new_song_02.jpg',
        },
        { title: 'starry sky', author: '王芊蝶', img: 'om_new_song_03.jpg' },
        { title: '未完成的心愿', author: 'EP', img: 'om_new_song_04.jpg' },
        { title: '一醉消愁', author: '华蕊', img: 'om_new_song_05.jpg' },
        { title: '自问自答DJ版', author: '潘艺翔', img: 'om_new_song_21.jpg' },
        {
          title: '真舍不得和你分手',
          author: '音果迷城',
          img: 'om_new_song_22.jpg',
        },
        {
          title: '好一朵腊梅花',
          author: '马佶原创',
          img: 'om_new_song_23.jpg',
        },
        {
          title: '我的契丹后裔',
          author: 'aojinchun',
          img: 'om_new_song_24.jpg',
        },
        {
          title: '我再也不敢相信女人',
          author: '华齐时代娱乐',
          img: 'om_new_song_25.jpg',
        },
        { title: '誓词', author: '词作家李俊伟', img: 'om_new_song_26.jpg' },
        { title: '自己  歌词版', author: '罗杰熙', img: 'om_new_song_27.jpg' },
        {
          title: '请记住你原来个姓名',
          author: '潮州府城实业有限公司',
          img: 'om_new_song_28.jpg',
        },
        { title: '爱就爱了', author: '羽劫', img: 'om_new_song_29.jpg' },
        { title: '火之魂', author: '马佶原创', img: 'om_new_song_30.jpg' },
        { title: '再见已不再见', author: '老苏', img: 'om_new_song_41.jpg' },
        {
          title: '我们一起游兴安',
          author: '飞天龙',
          img: 'om_new_song_42.jpg',
        },
        { title: '爱情会再来', author: '飞天龙', img: 'om_new_song_43.jpg' },
        {
          title: '点亮爱的阳光',
          author: '歌手韩伟',
          img: 'om_new_song_44.jpg',
        },
        { title: '佛前一朵莲', author: '江波', img: 'om_new_song_45.jpg' },
      ],
      songList2: [
        { title: '少儿牧牛呼声', author: '严豆豆', img: 'om_song_101.jpg' },
        { title: '等你下课', author: '君离', img: 'om_song_102.jpg' },
        { title: '勋章', author: '林子硕', img: 'om_song_103.jpg' },
        { title: '空空如也', author: 'sinyea宇', img: 'om_song_104.jpg' },
        { title: '小温暖', author: '1016283260', img: 'om_song_105.jpg' },
        { title: '山楂树の恋', author: '林子小傲娇i', img: 'om_song_106.jpg' },
        { title: '演员', author: '难逃', img: 'om_song_107.jpg' },
        { title: '老街', author: '不走调的杨先森', img: 'om_song_108.jpg' },
        {
          title: '不能说的秘密Cover周杰伦',
          author: 'Gentle＂q1ng',
          img: 'om_song_109.jpg',
        },
        { title: '说散就散', author: 'Toy A', img: 'om_song_110.jpg' },
        { title: '远走高飞', author: '温弓册', img: 'om_song_111.jpg' },
        { title: '一言难尽', author: '刘春', img: 'om_song_112.jpg' },
        {
          title: '女儿情-男声吉他弹唱版',
          author: '黄平',
          img: 'om_song_113.jpg',
        },
        { title: '当我想你的时候', author: '董文飞', img: 'om_song_114.jpg' },
        { title: '小路', author: '悦声无限', img: 'om_song_115.jpg' },
        { title: '死性不改', author: '杰哥哥', img: 'om_song_116.jpg' },
        { title: '低碳贝贝', author: '子辰', img: 'om_song_117.jpg' },
        { title: '男人花', author: '王峰', img: 'om_song_118.jpg' },
        { title: '告白气球', author: '熙er', img: 'om_song_119.jpg' },
        { title: '相思的苦', author: '恋雪/张雪冰', img: 'om_song_120.jpg' },
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
<style lang="less" scoped>
@import '@/assets/global.less';

.tabs {
  width: 80vw;
  margin: 0 auto;
  .tab-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px #dcdcf2 solid;
    .title {
      font-size: 16px;
      padding-bottom: 15px;
      margin: 0 30px -2px;
      font-weight: bold;
      &.active {
        border-bottom: 2px #ff0086 solid;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }

  .tab-content {
    padding-top: 40px;
  }
}
</style>
