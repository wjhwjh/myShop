<template>
  <div>
    <headNav title="新闻列表"></headNav>

    <ul class="newsWrap">
      <!-- {{
            dataSource
      }}-->
      <li v-for="(item, index) in dataSource" :key="index">
        <img :src="item.imgUrl" alt />
        <router-link :to="{name:'newsDetail', params:{id:item.id}}">
          <h2>{{item.title}}</h2>
          <p>{{item.create_date}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>    

<script>
import data from "./data.js";

console.log("静态数据--", data);

export default {
  name: "newList",
  data() {
    return {
       dataSource:data.dataSource
    };
  },
  created() {
    // 数据请求
    // this.$Axios.get()
    // .then(res=>{
    // })
    // .catch(res=>{
    //     console.log('新闻列表异常')
    // })
  }
};
</script>
<style scoped>
.newsWrap {
  padding: 0 15px;
}
.newsWrap li {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.newsWrap li img {
  width: 100px;
  flex: 0 0 100px;
  height: auto;
}
.newsWrap li a {
  padding-left: 15px;
}
.newsWrap li a h2 {
  font-size: 16px;
  font-weight: normal;
  color: #333;
  line-height: 1.6;
}
.newsWrap li a p {
  font-size: 14px;
  color: #999;
}
</style>