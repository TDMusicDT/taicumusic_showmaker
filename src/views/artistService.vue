<template>
  <div>
    <div class="section-1">
      <com-swiper :img-list="bannerList" />
    </div>
    <div class="section-container">
      <section class="section">
        <h2 class="section-title">签约艺人可享受</h2>
        <div class="enjoy-list">
          <div class="enjoy-item" v-for="item in enjoyList" :key="item.title">
            <img :src="cloudImageUrl + item.icon" alt="" />
            <div class="text-xl mt-4 mb-2">
              <strong>{{ item.title }}</strong>
            </div>
            <div class="text-sm desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title">合作艺人/音乐人</h2>
        <p class="text-xl mt-2 mb-4">
          <em>目前Hikoon Music已累计与500+名网络红人、歌手建立合作</em>
        </p>

        <div class="enjoy-list">
          <div class="enjoy-item" v-for="item in artistList" :key="item.title">
            <img :src="cloudImageUrl + item.cover" alt="" />
            <div class="text-xl mt-4 mb-2">
              <strong>{{ item.title }}</strong>
            </div>
            <div class="text-sm desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'artistService',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      bannerList: [
        'artist_bg_01.jpeg',
        'artist_bg_02.jpeg',
        'artist_bg_03.jpeg',
        'artist_bg_04.jpeg',
        'artist_bg_05.jpeg',
        'artist_bg_06.jpeg',
      ],
      enjoyList: [
        {
          title: '音乐制作',
          icon: 'artist_enjoy_01.png',
          desc: '包含实录编曲、和声、录音、配唱、俢唱、混音等',
        },
        {
          title: '全球音乐发行',
          icon: 'artist_enjoy_02.png',
          desc: '我们提供免费全球音乐免费发行，国内外20+音乐平台，海外240个国家地区，正版上线销售并且提供歌词制作，封面设计',
        },
        {
          title: '视频剪辑MV',
          icon: 'artist_enjoy_03.png',
          desc: '短视频剪辑制作，包含拍摄、后期、选景等',
        },
        {
          title: '商业项目合作',
          icon: 'artist_enjoy_04.png',
          desc: '广告曲、音乐制作项目，帮助音乐人获取演出机会、增加线下曝光并获取收益',
        },
        {
          title: '艺人培训',
          icon: 'artist_enjoy_05.png',
          desc: '根据艺人自身评估，定位，提供优质的艺人培训服务，包括声乐、舞蹈、表演、乐器培训等',
        },
        {
          title: '版权歌曲共享',
          icon: 'artist_enjoy_06.png',
          desc: '依据歌手/艺人风格，可演唱hikoon体系内所有公司已发行歌曲，翻唱正版化',
        },
      ],
      artistList: [
        {
          title: '胡66',
          cover: 'artist_01.jpeg',
          desc: '华语女歌手，代表作《浪人琵琶》、《空空如也》',
        },
        {
          title: '王靖雯',
          cover: 'artist_02.jpeg',
          desc: '实力唱将、人气音乐人、《中国好声音2021》亚军；代表作《沦陷》《善变》',
        },
        {
          title: '大籽',
          cover: 'artist_03.jpeg',
          desc: '新生代唱作女歌手，代表作《白月光与朱砂痣》、《放空》',
        },
        {
          title: '王唯乐Wesler',
          cover: 'artist_04.jpeg',
          desc: '新生代独立唱作人，代表作《执迷不悟》、《慢慢》',
        },
        {
          title: '零一九零贰',
          cover: 'artist_05.jpeg',
          desc: '“酷狗星曜计划” 战略音乐人，代表作《忘川彼岸》、《还在假装》',
        },
        {
          title: 'Uu刘梦妤',
          cover: 'artist_06.jpeg',
          desc: '橘色系女孩，代表作《气象站台》、《小城小爱》',
        },
        {
          title: '程jiajia',
          cover: 'artist_07.jpeg',
          desc: '00后唱作人，代表作《别错过》、《山楂树之恋》',
        },
        {
          title: '万豹',
          cover: 'artist_08.jpeg',
          desc: '实力唱作人，代表作《其实雨也没多大》',
        },
        {
          title: '秋原依',
          cover: 'artist_09.jpeg',
          desc: '00后潜力女歌手，代表作《错季》',
        },
        {
          title: 'Li-2c',
          cover: 'artist_10.jpeg',
          desc: '新生代歌手，代表作《火海》、《隔岸观火》',
        },
        {
          title: '橘子妹',
          cover: 'artist_11.jpeg',
          desc: '热门女歌手，代表作《特别邀请》',
        },
        {
          title: '柳岸',
          cover: 'artist_12.jpeg',
          desc: '独特烟嗓，代表作《有始无终》',
        },
        {
          title: '苏白',
          cover: 'artist_13.jpeg',
          desc: '新生代音乐人，代表作《樱花草》',
        },
        {
          title: '李飘飘',
          cover: 'artist_14.jpeg',
          desc: '新生代音乐人，代表作《我在你身后》',
        },
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
.enjoy-list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  overflow: hidden;
  .enjoy-item {
    // float: left;
    width: 157px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 40px;
    text-align: center;
    overflow: hidden;
    .desc {
      text-align: left;
      color: #50555c;
    }
    img {
      border-radius: 4px;
      //   cursor: pointer;
      transition: all 0.4s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
