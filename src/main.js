import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'

// 自定义公共组件
import CommonComponents from '@/components/common'
// 加载自定义公共组件
Vue.use(CommonComponents)

Vue.config.productionTip = false

Vue.prototype.cloudImageUrl =
  'https://taicumusic.ks3-cn-beijing.ksyuncs.com/imgs/'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
