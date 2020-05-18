<template>
  <div>
    <navBar title="图片详情"></navBar>
    <div class="content">
      <div class="tit-wrap">
        <h2>{{dataPhotoCurrent.title}}</h2>
        <p>
          <span>国籍：{{dataPhotoCurrent.from}}</span>
          <span>时长：{{dataPhotoCurrent.timeLength}}</span>
        </p>
      </div>
      <p class="des">{{dataPhotoCurrent.content}}</p>
      <ul class="img-wrap">
        <li v-for="(item, idx) in dataPhotoArray" :key="idx">
          <!-- img 一定要闭合标签，不然渲染就不会成功 -->
          <img :src="item" alt width="100%" height="auto" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { dataPhotoList, dataPhotoDetailImg } from "./data.js";

export default {
  data() {
    return {
      dataPhotoArray: [],
      dataPhotoCurrent: {}
    };
  },
  mounted() {},
  created() {
    // 这里图片的借口和文案内容的接口是不同的，在请求后台的时候需要进行并发请求
    // 图片预览功能
    let queryId = this.$route.query.id;
    let dataPhotoImg = {};
    dataPhotoImg = dataPhotoDetailImg.filter(item => item.id == queryId)[0];
    this.dataPhotoArray = dataPhotoImg["imgUrlBig"];
    //console.log("判断是否是数组", this.dataPhotoArray instanceof Array);
    //当前列表数据
    this.dataPhotoCurrent = dataPhotoList.filter(item => item.id == queryId)[0];
    console.log("当前数据", this.dataPhotoCurrent);
  },
  methods: {}
};
</script>
<style lang="css" scoped>
.content {
  padding: 15px 15px;
}
.img-wrap {
  display: flex;
  flex-wrap: wrap;
}
.img-wrap li {
  flex: 1 1 33.33%;
  padding: 5px;
}
.img-wrap li img {
  width: 100%;
  display: block;
}

.tit-wrap {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.tit-wrap h2 {
  font-size: 16px;
  color: #222;
  padding-bottom: 10px;
}
.tit-wrap p {
  font-size: 14px;
}
.tit-wrap p span {
  margin-right: 20px;
}
.des {
  line-height: 1.8;
  font-size: 14px;
  color: #666;
  padding-top: 15px;
  padding-bottom: 10px;
}
</style>