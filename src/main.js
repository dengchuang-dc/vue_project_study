import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css';
import './plugins/ant_design_vue.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
