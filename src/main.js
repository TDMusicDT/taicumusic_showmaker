import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css'
import '@/assets/global.less'

Vue.config.productionTip = false

Vue.prototype.cloudImageUrl =
  'https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
