// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css' // css需要单独引入
import moment from 'moment'

import { Toast } from 'mint-ui'

import VuePreview from 'vue-preview'


// assets中的文件是以模块形式的引入全局的css和js,在js文件并没有导出
// 使用import直接引入
import '@/assets/style/main.css'
import '@/assets/js/base.js'

Vue.config.productionTip = false

// 挂载axios
Vue.prototype.$Axios = Axios;

//Axios.defaults.baseURL='' // axios请求时相同接口的路径名



// 挂载mint
Vue.use(mint)
    // mint-ui里totast不是全局变量，需要单独引入
Vue.prototype.$toast = Toast;

// 挂载VuePreview
Vue.use(VuePreview)

// 导航全局组件
import headNav from './components/headNav/headNav.vue'
Vue.component('headNav', headNav);

import navBar from './components/common/navBar.vue'
Vue.component('navBar', navBar)

// 挂载全局评论组建
import Comment from './components/common/comment'
Vue.component('Comment', Comment)



// 全局过滤器,格式化时间
Vue.filter('timeFilter', function(date, formatStr) {
    return moment(date).format(formatStr)
});



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})