<template>
  <div>
    <section class="section-1">
      <div class="blurred-layer"></div>
      <div class="text">
        <em>音乐无处不在</em>
      </div>
    </section>
    <div class="section-container">
      <section class="section-2">
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
      <section class="section-4">
        <h2 class="section-title">合作艺人</h2>
        <div>合作艺人</div>
      </section>

      <section class="section-5">
        <h2 class="section-title">歌曲案例</h2>
        <div>
          <div class="song-list">
            <div class="song-item" v-for="item in songList" :key="item.title">
              <img :src="cloudImageUrl + item.cover" alt="" />
              <div class="text-xl mt-4 mb-2">
                <strong>{{ item.title }}</strong>
              </div>
              <div>
                <strong>{{ item.author }}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-5">
        <h2 class="section-title">最近专辑</h2>
        <div>最近专辑</div>
      </section>
    </div>
    <!-- <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-scrollbar"></div>
    </div> -->
  </div>
</template>

<script>
import Swiper from 'swiper'
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

      songList: [
        { title: '孤城', author: '洛先生', cover: 'song_gucheng.jpeg' },
        { title: '我想要', author: '盖君炎', cover: 'song_wxy.jpeg' },
        { title: '沦陷', author: '王靖雯不胖', cover: 'song_lunxian.jpeg' },
        {
          title: '放空',
          author: 'A1 TRIP/大籽/Lil E',
          cover: 'song_fangkong.jpeg',
        },
        { title: 'TA', author: '不是花火呀', cover: 'song_ta.jpeg' },
        { title: '迷失幻境', author: 'IN-K / 王忻辰', cover: 'song_mshj.jpeg' },
        { title: '白月光与朱砂痣', author: '大籽', cover: 'song_bygyzsz.jpeg' },
        { title: '执迷不悟', author: '小乐哥', cover: 'song_zmbw.jpeg' },
        { title: '云与海', author: '阿YueYue', cover: 'song_yyh.jpeg' },
        { title: '忘川彼岸', author: '零一九零贰', cover: 'song_wcpa.jpeg' },
        { title: '不知所措', author: '王靖雯不胖', cover: 'song_bzsc.jpeg' },
        { title: '下山', author: '要不要买菜', cover: 'song_xiashan.jpeg' },
      ],
    }
  },
  mounted() {
    // this.swiperInit()
  },
  methods: {
    swiperInit() {
      new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.section-title {
  font-size: 36px;
  font-weight: 500;
  font-style: italic;
  margin-top: 40px;
  color: #524f4c;
}

section {
  position: relative;
  padding-bottom: 40px;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    // border-top: 1px solid #ccc;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
  }
}

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

.song-list {
  overflow: hidden;
  .song-item {
    float: left;
    width: 157px;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 40px;
    text-align: center;
    img {
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.4s ease-in;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
