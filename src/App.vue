<template>
  <div id="app">
    <router-view />
    <!-- table 切换  -->
     
    <mt-tabbar v-model="selected" fixed>
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
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/search.png" />
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>


//let bannerUrl = [banner1Url, banner2Url, banner3Url];

export default {
  name: "App",
  data() {
    return {
      //bannerUrl,
      selected: ""
    };
  },
  created() {},
  mounted() {
    //console.log('axios---',this.$Axios);
  },
  watch: {
    // 通过监听变量的改变，实现路由编程式的跳转
    selected(newV,oldV) {
        this.$router.push({name:this.selected});
    }
  }
};
</script>

<style>
.banner {
  height: 200px;
  border-bottom: 1px solid #fafafa;
}
</style>
