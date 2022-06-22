import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css'

// 自定义公共组件
import CommonComponents from '@/components/common'
// 加载自定义公共组件
Vue.use(CommonComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
