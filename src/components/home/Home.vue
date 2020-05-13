<template>
  <div>
    <headNav title="首页"></headNav>
    <!-- 轮播图 -->
    <div>
      <mt-swipe :auto="4000" class="banner">
        <mt-swipe-item v-for="(item, index) in bannerUrl" :key="index">
          <!-- v-lazy是图片的 -->
          <img v-lazy="item" alt width="100%" height="auto" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    
    <!-- 九宫格 -->
    <ul class="list">
      <li v-for="(list, index) in listSource" :key="index">
        <router-link :to="list.router">
          <img :src="list.url" alt />
          <p>{{list.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>    
<script>
import banner1Url from "../../assets/img/banner1.jpg";
import banner2Url from "../../assets/img/banner2.jpg";
import banner3Url from "../../assets/img/banner3.jpg";

//九空格
import news from "../../assets/img/news.png";
import share from "../../assets/img/share.png";
import goods from "../../assets/img/goods.png";
import consultation from "../../assets/img/consultation.png";
import feedback from "../../assets/img/feedback.png";
import contact from "../../assets/img/contact.png";

let listSource = [
  {
    url: news,
    title: "新闻资讯",
    router: { name: "newsList" }
  },
  {
    url: share,
    title: "图文分享",
    router: { name: "photo.list" }
  },
  {
    url: goods,
    title: "商品展示",
    router: { name: "newsList" }
  },
  {
    url: consultation,
    title: "咨询",
    router: { name: "newsList" }
  },
  {
    url: feedback,
    title: "留言反馈",
    router: { name: "newsList" }
  },
  {
    url: contact,
    title: "联系我们",
    router: { name: "newsList" }
  }
];

let bannerUrl = [banner1Url, banner2Url, banner3Url];
export default {
  name: "Home",
  data() {
    return {
      bannerUrl,
      listSource
    };
  },
  methods: {},
  created() {
    console.log("这是一个首页");
  }
};
</script>

<style>
.banner {
  height: 200px;
  border-bottom: 1px solid #fafafa;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
}
.list li {
  width: 33.33%;
  text-align: center;
  padding: 15px 0;
}
.list li a {
  display: block;
}
.list li a img {
  width: 30px;
  height: 30px;
}
.list li a p {
  font-size: 14px;
  color: #222;
  margin-top: 15px;
}
</style>