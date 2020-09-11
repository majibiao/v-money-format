import Vue from 'vue'
import App from './App.vue'
import MoneyFormat from './index'
// 引入iview,antd,element三个组件库,分别测试组件及指令的运行情况
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(MoneyFormat)
Vue.use(ViewUI)
Vue.use(Antd)
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
