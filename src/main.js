// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import mint from 'mint-ui'
import 'mint-ui/lib/style.css' // css需要单独引入


// assets中的文件是以模块形式的引入的
import '@/assets/style/main.css'
import '@/assets/js/base.js'

Vue.config.productionTip = false

// 挂载axios
Vue.prototype.$Axios = Axios;

//Axios.defaults.baseURL='' // axios请求时相同接口的路径名



// 挂载mint
Vue.use(mint)


// 导航全局组件
import headNav from './components/headNav/headNav.vue'
Vue.component('headNav', headNav);




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})