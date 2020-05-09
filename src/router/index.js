import Vue from 'vue'
import vueRouter from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

//在路由配置中当component的属性是回调函数，返回由import引入的组件，便是路由懒加载也就是按需加载
const Home = () =>
    import ('@/components/home/home.vue');

const Vip = () =>
    import ('@/components/vip/vip.vue');

const ShopCart = () =>
    import ('@/components/shopCart/shopCart.vue');

const Search = () =>
    import ('@/components/search/search.vue');
const News = () =>
    import ('@/components/News/newList.vue');
const NewsDetail = ()=>import('@/components/News/newsDetail.vue');    

Vue.use(vueRouter)


const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}




let router = new vueRouter({
    linkActiveClass:'tabActive',
    // 路由匹配
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/vip',
            name: 'vip',
            component: Vip
        },
        {
            path: '/shopCart',
            name: 'shopCart',
            component: ShopCart
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/newsList',
            name: 'newsList',
            component: News
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: NewsDetail
        }
    ]
})



export default router