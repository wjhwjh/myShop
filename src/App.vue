<template>
  <div id="app">
    <router-view />
    <!-- table 切换  -->

    <!-- <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/home.png" />
           首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/img/VIP.png" />
        VIP
      </mt-tab-item>
      <mt-tab-item id="shopCart">
        <img slot="icon" src="./assets/img/cart.png" />
        购物车
      </mt-tab-item>
      <mt-tab-item id="search" :active="tabActive">
        <img slot="icon" src="./assets/img/search.png" />
        查找
      </mt-tab-item>
    </mt-tabbar>-->

    <ul class="tabBar">
      <li v-for="(item, index) in tabBar" :key="index">
        <router-link :to="item.route"  exact>
          <img :src="item.icon" />
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import homeIcom from "./assets/img/home.png";
import vipIcom from "./assets/img/VIP.png";
import cartIcom from "./assets/img/cart.png";
import searchIcom from "./assets/img/search.png";

let tabBar = [
  {
    icon: homeIcom,
    title: "首页",
    route: "/"
  },
  { icon: vipIcom, title: "VIP", route: "vip" },
  { icon: cartIcom, title: "购物车", route: "/shopCart" },
  { icon: searchIcom, title: "查找", route: "/search" }
];

export default {
  name: "App",
  data() {
    return {
      tabBar,
      selected: ""
    };
  },
  created() {},
  mounted() {
    //console.log('axios---',this.$Axios);
  },
  watch: {
    // 通过监听变量的改变，实现路由编程式的跳转
    selected(newV, oldV) {
      this.$router.push({ name: this.selected });
    }
  }
};
</script>

<style>
.banner {
  height: 200px;
  border-bottom: 1px solid #fafafa;
}
.tabBar li a.tabActive {
  font-weight: bold;
  color: #F00;
}
.tabBar{
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 55px;
  left: 0;
  bottom: 0;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05);
  background: #fff;
}

.tabBar li{
  flex: 1;
  text-align: center;
}
.tabBar li a{
display: block;
color: #333;
font-size: 14px;
}
.tabBar li a img{
  width: 30px;
  height: 30px;
}
</style>
