<template>
  <div>
    <section class="section-1">
      <div class="blurred-layer"></div>
      <div class="text">
        <em>音乐宣发</em>
      </div>
      <div class="desc">
        <i>
          当你的歌曲被下载或在世界范围内播放时，你可能会获得你甚至不知道的版税。太簇音乐将为您提供并收取这些版税。
        </i>
      </div>
    </section>
    <div class="section-container">
      <section class="section">
        <div class="pub">
          <h2 class="pub-title">如何发行</h2>
          <p class="pub-desc">
            太簇音乐有着专业的版权管理团队，可以为您收取全网所有上线的歌曲版权，并提供多种分成方案，除此之外不收取您任何管理费用。
          </p>
          <div class="pub-flow">
            <div v-for="(f, index) in flowList" class="flow-item" :key="index">
              <div class="number">{{ index + 1 }}</div>
              <h1 class="title">{{ f.title }}</h1>
              <p class="desc">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>
      <div class="section-container">
        <section class="section">
          <h2 class="section-title">服务优势</h2>
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
      </div>
      <section>
        <com-music :data="caseList" />
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'muiscPublish',
  components: {},
  filters: {},
  props: {},
  data() {
    return {
      flowList: [
        {
          title: '上传作品',
          desc: '注册账号并将上传作品',
        },
        {
          title: '授权音乐作品',
          desc: '授权专辑音乐作品',
        },
        {
          title: '审核通过的作品',
          desc: '作品将于5个工作日内为您审核完毕，并为您的歌曲推荐推广方式',
        },
        {
          title: '数位上架',
          desc: '国内外数字音乐平台 240个国家地区正版上线销售',
        },
        {
          title: '收益版税结算',
          desc: '多渠道音乐销售变现、试听、下载，结算全球音乐平台作品使用收益',
        },
      ],
      enjoyList: [
        {
          title: '全球音乐发行',
          icon: 'artist_enjoy_02.png',
          desc: '我们提供免费全球音乐免费发行，国内外20+音乐平台，海外240个国家地区，正版上线销售，并且提供歌词制作，封面设计等。',
        },
        {
          title: '全国KTV投放',
          icon: 'muiscPublish/png.png',
          desc: '全国连锁KTV投放、覆盖95%的KTV全面入库你的歌曲！',
        },
        {
          title: '版权注册',
          icon: 'muiscPublish/png (3).png',
          desc: '协助音乐人、作词人、作曲人、编曲人、进行音乐作品版权注册协助、并且提供完整的作品保护方法。',
        },
        {
          title: '自媒体平台推广',
          icon: 'muiscPublish/png (2).png',
          desc: '微信、微博等社交新媒体平台宣传发布歌手/艺人新歌、资讯、动态等。',
        },
        {
          title: '翻唱推广',
          icon: 'muiscPublish/png (1).png',
          desc: '各路网红为你翻唱，包括重新填词，编曲，带动原唱热度。',
        },
        {
          title: '短视频推广',
          icon: 'muiscPublish/png (4).png',
          desc: '根据您的单曲进行创意视频剪辑，故事拍摄制作，发布各大平台短视频宣传。',
        },
      ],
      caseList: {
        title: '宣发案例',
        case: true,
        showLine: false,
        items: [
          {
            imgSource: 'muiscPublish/jpeg (2).jpg',
            label: '《想》',
            authors: ['朱添泽'],
            desc: '话题播放量8亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (1).jpg',
            label: '《我想要》',
            authors: ['盖君炎'],
            desc: '话题播放量16亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg.jpg',
            label: '《沦陷》',
            authors: ['王靖雯不胖'],
            desc: '话题播放量11亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (4).jpg',
            label: '《TA》',
            authors: ['不是花火呀'],
            desc: '使用量113.6w',
          },
          {
            imgSource: 'muiscPublish/jpeg (3).jpg',
            label: '《给不了你未来》',
            authors: ['张家旺'],
            desc: '话题播放量10亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (5).jpg',
            label: '《白月光与朱砂痣》',
            authors: ['大籽'],
            desc: '话题播放量49亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (6).jpg',
            label: '《错季》',
            authors: ['秋原依'],
            desc: '抖音话题12亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (7).jpg',
            label: '《云与海》',
            authors: ['阿YueYue'],
            desc: '播放量13亿+',
          },
          {
            imgSource: 'muiscPublish/jpeg (8).jpg',
            label: '《善变》',
            authors: ['王靖雯不胖'],
            desc: '话题播放量11亿+',
          },
        ],
      },
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
.section-1 {
  position: relative;
  // width: 100vw;
  height: 470px;
  background-repeat: no-repeat;
  background-size: 1905px 1071.56px;
  background-color: transparent;
  background-position: 0px -152.281px;
  background-image: url('https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/muiscPublish/png (5).png');
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

  .text,
  .desc {
    width: 560px;
    position: absolute;
    z-index: 2;
    top: 35%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 45px;
    text-align: left;
  }

  .desc {
    top: 70%;
    font-size: 20px;
  }
}

// 如何发行
.pub {
  width: 100%;
  color: @color-font;
  padding-top: 80px;
  padding-bottom: 35px;
  &-title {
    font-size: 36px;
    text-align: center;
    margin-bottom: 5px;
  }
  &-desc {
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
  }
  &-flow {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .flow-item {
      width: 193px;
      padding: 0 10px;
      position: relative;
      .number {
        width: 54px;
        height: 54px;
        border: 1px solid @color-font;
        line-height: 54px;
        text-align: center;
        font-size: 26px;
        margin: 0 auto;
        margin-bottom: 12px;
      }
      .title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 12px;
      }
      .desc {
        font-size: 16px;
        text-align: center;
      }
      &:not(:last-child)::after {
        content: '';
        display: block;
        position: absolute;
        right: -65px;
        top: 30px;
        height: 1px;
        border-bottom: 1px solid rgba(80, 85, 92, 0.5);
        width: 100px;
      }
    }
  }
}

.enjoy-list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  overflow: hidden;
  .enjoy-item {
    width: 157px;
    box-sizing: border-box;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 40px;
    text-align: center;
    overflow: hidden;
    .desc {
      text-align: left;
      color: #50555c;
    }
  }
}
</style>
