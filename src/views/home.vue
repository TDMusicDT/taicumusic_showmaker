<template>
  <div>
    <section class="section-1">
      <div class="blurred-layer"></div>
      <div class="text">
        <em>音乐无处不在</em>
      </div>
    </section>
    <div class="section-container">
      <section class="section section-2">
        <h2 class="section-title">我们能做什么</h2>
        <p class="mt-3 mb-6">
          <em>
            <strong>Taicu Music</strong>
            是一家专业的原创音乐服务公司，我们致力于成为中国最新锐的音乐品牌营销、媒体运营以及文化产品整合机构。
          </em>
        </p>
        <div class="media-list">
          <div class="media-item" v-for="item in mediaList" :key="item.title">
            <img :src="cloudImageUrl + item.img" alt="" />
            <div class="text-2xl mt-4 mb-3">{{ item.title }}</div>
            <div>
              {{ item.desc }}
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="section-3">
          <h2 class="section-title">Hikoon Music词曲库</h2>
      </section> -->
      <section>
        <com-music :data="artistObject" />
        <!-- <h2 class="section-title">合作艺人</h2>
        <div>
          <com-music :data="artistList" />
        </div> -->
      </section>

      <section>
        <com-music :data="songObject" />
      </section>

      <section>
        <com-music :data="albumObject" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      mediaList: [
        {
          title: '全球音乐免费发行',
          img: 'home_media_01.jpeg',
          desc: '为您提供全球免费发行，国内外20+音乐平台，海外240个国家地区正版上线销售，如：腾讯音乐、网易云音乐、KKbox、Apple Music...等。',
        },
        {
          title: '音乐制作',
          img: 'home_media_02.jpeg',
          desc: '公司签约了众多优秀词曲作者和制作人，同时储备了大量优质的原创词曲作品。涵盖流行、电子、摇滚、古风、民谣等多种曲风。',
        },
        {
          title: '词曲代售',
          img: 'home_media_03.jpeg',
          desc: '用于词曲作者自助上传词曲作品， 管理版权文件，所有作者均实名认证， 采用电子合同签署版权协议，安全性和效率均远高于传统签约模式。',
        },
        {
          title: '艺人服务',
          img: 'home_media_04.jpeg',
          desc: '凭借卓越的影响力和完整的音乐生态体系为艺人提供艺人经纪、企划宣发、版权运营、商演代言等一站式服务。',
        },
      ],

      songObject: {
        title: '歌曲案例',
        showMore: false,
        items: [
          {
            label: '孤城',
            authors: ['洛先生'],
            imgSource: 'song_gucheng.jpeg',
          },
          { label: '我想要', authors: ['盖君炎'], imgSource: 'song_wxy.jpeg' },
          {
            label: '沦陷',
            authors: ['王靖雯不胖'],
            imgSource: 'song_lunxian.jpeg',
          },
          {
            label: '放空',
            authors: ['A1 TRIP', '大籽', 'Lil E'],
            imgSource: 'song_fangkong.jpeg',
          },
          { label: 'TA', authors: ['不是花火呀'], imgSource: 'song_ta.jpeg' },
          {
            label: '迷失幻境',
            authors: ['IN-K', '王忻辰'],
            imgSource: 'song_mshj.jpeg',
          },
          {
            label: '白月光与朱砂痣',
            authors: ['大籽'],
            imgSource: 'song_bygyzsz.jpeg',
          },
          {
            label: '执迷不悟',
            authors: ['小乐哥'],
            imgSource: 'song_zmbw.jpeg',
          },
          {
            label: '云与海',
            authors: ['阿YueYue'],
            imgSource: 'song_yyh.jpeg',
          },
          {
            label: '忘川彼岸',
            authors: ['零一九零贰'],
            imgSource: 'song_wcpa.jpeg',
          },
          {
            label: '不知所措',
            authors: ['王靖雯不胖'],
            imgSource: 'song_bzsc.jpeg',
          },
          {
            label: '下山',
            authors: ['要不要买菜'],
            imgSource: 'song_xiashan.jpeg',
          },
        ],
      },

      artistObject: {
        title: '合作艺人',
        showMore: true,
        items: [
          { imgSource: 'artist_01.jpeg', desc: '胡66' },
          { imgSource: 'artist_03.jpeg', desc: '大籽' },
          { imgSource: 'artist_05.jpeg', desc: '零一九零贰' },
          { imgSource: 'artist_02.jpeg', desc: '王靖雯' },
          { imgSource: 'artist_06.jpeg', desc: 'Uu刘梦妤' },
        ],
      },

      albumObject: {
        title: '最近专辑',
        showMore: true,
        showLine: false,
        items: [
          { label: '承让', desc: '曲肖冰', imgSource: 'album_01.png' },
          {
            label: '不被定义的风',
            desc: '陈仕雨',
            imgSource: 'album_02.jpeg',
          },
          {
            label: '如果我们从未来到',
            desc: '秋原依',
            imgSource: 'album_03.jpeg',
          },
          { label: '知道吗', desc: '孟颖', imgSource: 'album_04.png' },
          { label: '城南城北', desc: '苏蕾', imgSource: 'album_05.jpeg' },
        ],
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.section-1 {
  position: relative;
  width: 100vw;
  height: 627px;
  background-repeat: no-repeat;
  background-size: 1905px 1071.56px;
  background-color: transparent;
  background-position: 0px -152.281px;
  background-image: url('https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/home_bg_01.gif');
  background-attachment: fixed;

  .blurred-layer {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    line-height: 1;
    backdrop-filter: blur(1px);
    transition: all 0.2s ease-in 0s;
  }

  .text {
    position: absolute;
    z-index: 2;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 45px;
    font-weight: bold;
  }
}

.section-2 {
  .media-list {
    overflow: hidden;
    .media-item {
      float: left;
      width: 520px;
      margin-bottom: 40px;
      &:nth-child(odd) {
        margin-right: 20px;
      }
    }
  }
}
</style>
