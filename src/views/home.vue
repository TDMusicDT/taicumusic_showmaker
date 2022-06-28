<template>
  <div>
    <section>
      <com-swiper :img-list="bannerList" />
    </section>
    <section>
      <div class="icon-list">
        <div class="icon-item" v-for="i in iconList" :key="i.label">
          <img :src="cloudImageUrl + i.icon" :alt="i.label" />
          <p>{{ i.label }}</p>
        </div>
      </div>
    </section>
    <section class="section bg-gray">
      <h2 class="section-title">新歌首发</h2>
      <p class="section-subtitle">NEW SONG DEBUT</p>
      <div class="song-card-list">
        <div class="song-card-item" v-for="i in songList" :key="i.title">
          <img :src="cloudImageUrl + i.img" :alt="i.title" />
          <p class="title">{{ i.title }}</p>
          <p class="author">{{ i.author }}</p>
        </div>
      </div>
    </section>

    <section class="section bg-gray">
      <h2 class="section-title">全网音乐</h2>
      <p class="section-subtitle">WHOLE NETWORK MUSIC</p>
      <div class="song-card-list">
        <div
          class="song-card-item"
          v-for="i in songList2"
          :key="i.title"
          style="width: 25%"
        >
          <img :src="cloudImageUrl + i.img" :alt="i.title" />
          <p class="title">{{ i.title }}</p>
          <p class="author">{{ i.author }}</p>
        </div>
      </div>
    </section>

    <section class="section bg-gray">
      <h2 class="section-title">海外热门</h2>
      <p class="section-subtitle">OVERSEAS HOT 在线播放 - 过去7天</p>
      <!-- <div class="mb-16">
        <p class="font-bold">
          Beijing Drifting Melody Culture and Media Co. Ltd
        </p>
        <p class="font-bold text-2xl">
          Weekly Analytics Digest Jun 10 - Jun 16.
        </p>
      </div> -->
      <div class="font-bold text-xl">单曲排行</div>
      <table class="table">
        <thead>
          <tr>
            <th class="text-left">排行</th>
            <th class="text-left">歌曲</th>
            <th class="text-center">上周</th>
            <th class="text-center">
              <img :src="cloudImageUrl + 'om_table_th_1.png'" alt="" />
            </th>
            <th class="text-center">
              <img :src="cloudImageUrl + 'om_table_th_2.png'" alt="" />
            </th>
            <th class="text-center">
              <img :src="cloudImageUrl + 'om_table_th_3.png'" alt="" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, idx) in hotList" :key="idx">
            <td class="text-left font-bold">{{ '0' + (idx + 1) }}</td>
            <td class="text-left">
              <div class="flex items-center">
                <img :src="cloudImageUrl + i.cover" :alt="i.title" />
                <div class="ml-4">
                  <p class="font-bold">{{ i.title }}</p>
                  <p>{{ i.author }}</p>
                </div>
              </div>
            </td>
            <td class="text-center">
              <p>{{ i.week[0] }}</p>
              <p
                :class="
                  i.week[1].startsWith('-') ? 'text-red-400' : 'text-green-400'
                "
              >
                {{ i.week[1] }}
              </p>
            </td>
            <td>
              <p>{{ i.spotify[0] }}</p>
              <p
                :class="
                  i.spotify[1].startsWith('-')
                    ? 'text-red-400'
                    : 'text-green-400'
                "
              >
                {{ i.spotify[1] }}
              </p>
            </td>
            <td>
              <p>{{ i.apple[0] }}</p>
              <p
                :class="
                  i.apple[1].startsWith('-') ? 'text-red-400' : 'text-green-400'
                "
              >
                {{ i.apple[1] }}
              </p>
            </td>
            <td>
              <p>{{ i.th[0] }}</p>
              <p
                :class="
                  i.th[1].startsWith('-') ? 'text-red-400' : 'text-green-400'
                "
              >
                {{ i.th[1] }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="section bg-gray">
      <h2 class="section-title">歌曲推荐</h2>
      <p class="section-subtitle">SONG RECOMMENDATION</p>
      <div class="song-card-list">
        <div class="song-card-item" v-for="i in newList" :key="i.title">
          <img :src="cloudImageUrl + i.img" :alt="i.title" />
          <p class="title">{{ i.title }}</p>
          <p class="author">{{ i.author }}</p>
        </div>
      </div>
    </section>

    <section class="section bg-gray">
      <h2 class="section-title">会员自荐</h2>
      <p class="section-subtitle">SELF RECOMMENDATION</p>
      <div class="meida-list">
        <div class="meida-item" v-for="i in recomList" :key="i.title">
          <div class="flex justify-between items-center">
            <img :src="cloudImageUrl + i.img" :alt="i.title" />
            <div>
              <p class="title">{{ i.title }}</p>
              <p class="author">{{ i.author }}</p>
            </div>
          </div>
          <p class="text-sm">
            试听：
            <span class="font-bold">{{ i.count }}</span>
          </p>
        </div>
      </div>
    </section>

    <section class="section bg-gray">
      <h2 class="section-title">合作伙伴</h2>
      <p class="section-subtitle">COOPERATIVE PARTNER</p>
      <div class="partner-list">
        <div class="partner-item" v-for="(i, idx) in partners" :key="idx">
          <img :src="cloudImageUrl + i.img" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      bannerList: [
        'om_home_banner_01.jpeg',
        'om_home_banner_02.jpeg',
        'om_home_banner_03.jpeg',
        'om_home_banner_04.jpeg',
        'om_home_banner_05.jpeg',
      ],
      iconList: [
        { label: '全网发布', icon: 'om_home_icon_01.png' },
        { label: '版权认证', icon: 'om_home_icon_02.png' },
        { label: '版权结算', icon: 'om_home_icon_03.png' },
        { label: '销售分析器', icon: 'om_home_icon_04.png' },
      ],
      songList: [
        { title: '一醉消愁', author: '华蕊', img: 'om_song_01.jpg' },
        { title: '好一朵腊梅花', author: '马佶原创', img: 'om_song_02.jpg' },
        { title: '我的契丹后裔', author: 'aojinchun', img: 'om_song_03.jpg' },
        { title: '再见已不再见', author: '老苏', img: 'om_song_04.jpg' },
        {
          title: '幸福的春天（抗疫歌曲）',
          author: '马山虎',
          img: 'om_song_05.jpg',
        },
        { title: '《梦回嘉峪关》', author: '西峪文化', img: 'om_song_06.jpg' },
        { title: '《梦回嘉峪关》', author: '西峪文化', img: 'om_song_06.jpg' },
        { title: 'Lonely Day remix', author: 'M80', img: 'om_song_07.jpg' },
        { title: 'Feeling you 2019', author: 'M80', img: 'om_song_08.jpg' },
        { title: 'C位', author: 'M80', img: 'om_song_09.jpg' },
      ],
      songList2: [
        { title: 'Fight', author: '2022-03-11', img: 'om_song_10.jpg' },
        { title: 'Baila', author: '2022-02-01', img: 'om_song_11.jpg' },
        {
          title: 'This Far (Remixes)',
          author: '2022-02-01',
          img: 'om_song_12.jpg',
        },
        { title: 'Let It Go', author: '2022-01-12', img: 'om_song_13.jpg' },
        {
          title: 'Nothing（无）',
          author: '2021-12-17',
          img: 'om_song_14.jpg',
        },
        {
          title: 'Are You Ok You Can Plab Plab',
          author: '2021-12-10',
          img: 'om_song_15.jpg',
        },
        { title: '忽然成长', author: '2021-11-17', img: 'om_song_16.jpg' },
        { title: 'Yêu Là Cưới', author: '2021-11-24', img: 'om_song_17.jpg' },
      ],
      hotList: [
        {
          title: '我配不上你',
          author: '吕口口',
          cover: 'om_hot_song_01.png',
          week: ['10.0k', '2.00%'],
          spotify: ['7.0k', '-2.00%'],
          apple: ['2.9k', '15.00%'],
          th: ['2', '2.00%'],
        },
        {
          title: 'Limitless',
          author: 'SeVen.13',
          cover: 'om_hot_song_02.png',
          week: ['6.4k', '6.00%'],
          spotify: ['3.2k', '-2.00%'],
          apple: ['2.0k', '4.00%'],
          th: ['183', '79.00%'],
        },
        {
          title: '清新的小女孩',
          author: 'July Tun',
          cover: 'om_hot_song_03.png',
          week: ['4.0k', '-3.00%'],
          spotify: ['3.7k', '-5.00%'],
          apple: ['653', '21.00%'],
          th: ['0', '-3.00%'],
        },
        {
          title: 'sakura tears',
          author: '落落',
          cover: 'om_hot_song_04.png',
          week: ['3.2k', '16.00%'],
          spotify: ['2.3k', '28.00%'],
          apple: ['866', '-8.30%'],
          th: ['56', '12.00%'],
        },
        {
          title: '苏东坡',
          author: '司南',
          cover: 'om_hot_song_05.png',
          week: ['2.8k', '3.00%'],
          spotify: ['688', '-10.00%'],
          apple: ['2.1k', '-3.00%'],
          th: ['2', '-20.00%'],
        },
        {
          title: '鸟儿飞',
          author: '于果',
          cover: 'om_hot_song_06.png',
          week: ['3.3k', '6.00%'],
          spotify: ['4.2k', '24.00%'],
          apple: ['2.2k', '12.00%'],
          th: ['209', '17.00%'],
        },
        {
          title: '九儿',
          author: '李维',
          cover: 'om_hot_song_07.png',
          week: ['2.3k', '6.00%'],
          spotify: ['1.2k', '-25.00%'],
          apple: ['1.3k', '-15.00%'],
          th: ['112', '24.00%'],
        },
        {
          title: '不再见',
          author: '于果',
          cover: 'om_hot_song_08.png',
          week: ['1.7k', '7.00%'],
          spotify: ['1.0k', '-23.00%'],
          apple: ['811', '-9.00%'],
          th: ['1', '-78.00%'],
        },
        {
          title: '我想',
          author: '董昱昆',
          cover: 'om_hot_song_09.png',
          week: ['7.2k', '39.00%'],
          spotify: ['2.0k', '-3.00%'],
          apple: ['1.1', '-15.00%'],
          th: ['291', '-2.00%'],
        },
      ],
      newList: [
        { title: '今生相约', author: '远航', img: 'om_new_song_01.jpg' },
        {
          title: '冲锋的英雄',
          author: '孑匚懏蜀黍',
          img: 'om_new_song_02.jpg',
        },
        { title: 'starry sky', author: '王芊蝶', img: 'om_new_song_03.jpg' },
        { title: '未完成的心愿', author: 'EP', img: 'om_new_song_04.jpg' },
        { title: '一醉消愁', author: '华蕊', img: 'om_new_song_05.jpg' },
      ],
      recomList: [
        {
          title: '灰蒙蒙的天气',
          author: 'trip7096',
          img: 'om_recom_song_01.png',
          count: 53,
        },
        {
          title: '七彩乐居（家政歌曲）',
          author: '马山虎',
          img: 'om_recom_song_02.png',
          count: 163,
        },
        {
          title: '狠心说出口',
          author: '马山虎',
          img: 'om_recom_song_03.png',
          count: 73,
        },
        {
          title: '妈你别哭',
          author: '马山虎',
          img: 'om_recom_song_04.png',
          count: 189,
        },
        {
          title: '完美恋人',
          author: '许邦义',
          img: 'om_recom_song_05.png',
          count: 67,
        },
        {
          title: '为了完美',
          author: '渔舟',
          img: 'om_recom_song_06.png',
          count: 98,
        },
      ],
      partners: [
        { img: 'om_partner_01.png' },
        { img: 'om_partner_02.png' },
        { img: 'om_partner_03.png' },
        { img: 'om_partner_04.png' },
        { img: 'om_partner_05.png' },
        { img: 'om_partner_06.png' },
        { img: 'om_partner_07.png' },
        { img: 'om_partner_08.png' },
        { img: 'om_partner_09.png' },
        { img: 'om_partner_10.png' },
        { img: 'om_partner_11.png' },
        { img: 'om_partner_12.png' },
      ],
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.meida-list {
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: 40px;
  overflow: hidden;

  .meida-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 33%;
    float: left;
    position: relative;
    min-height: 1px px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 40px;
    text-align: left;
    img {
      display: block;
      max-width: 100%;
      height: auto;
      transition: all 0.3s ease-in-out;
      margin-right: 15px;
      &:hover {
        transform: scale(1.04);
      }
    }
    .title {
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: #26284e;
      margin-top: 12px;
      margin-bottom: 6px;
      font-weight: bold;
    }
    .author {
      color: #7e82c6;
      font-size: 14px;
    }
  }
}

.icon-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 10vw;

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    padding-top: 30px;
    padding-bottom: 30px;
    border: 1px #fff solid;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      border-color: #f1f1f1;
      background-color: #f8f8f8;
    }
    p {
      font-family: 'Verdana';
      font-size: 18px;
      color: #26284e;
      margin-top: 10px;
    }
  }
}

.partner-list {
  width: 65vw;
  margin: 0 auto;
  overflow: hidden;
  .partner-item {
    float: left;
    width: 25%;
    margin-bottom: 70px;
  }
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 17px;
  background-color: transparent;
  th {
    vertical-align: middle;
    border-bottom: 1px solid #ebebf9 !important;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 16px !important;
    font-family: 'Alibaba PuHuiTi Light';
    img {
      display: inline-block;
    }
  }

  td {
    padding: 8px;
    line-height: 1.42857143;
    border-top: 1px solid #ddd;
    font-size: 16px;
  }
}
</style>
