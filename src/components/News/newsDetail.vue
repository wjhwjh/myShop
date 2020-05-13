<template>
  <div>
    <headNav title="新闻列表"></headNav>
    <navBar title="新闻详情"></navBar>
    <div class="content">
      
<h3>{{dataContent.title}}</h3>
<p class="time">{{dataContent.top_time | timeFilter('YYYY-MM-DD')}}</p>
<p class="text">{{dataContent.content}}</p>
 
 <img :src="dataContent.imgUrl">
    </div>
  </div>
</template>
 <script>
import data from "./data.js";

export default {
  data() {
    return {
      dataDetail: data.dataDetail,
      dataContent: {}
    };
  },
  created() {
    let id = this.$route.params.id;
    this.dataContent = this.dataDetail.filter(item => item.id == id)[0];
  }
};
</script>
 <style scoped>
.content {
   width: 100%;
   padding: 0 15px;
   color: #333;
   padding-top: 10px;
}
.content img{
    width: 100%;
}
.content h3{
    font-size: 16px;
    font-weight: bold;
    line-height: 1.6;
}
.content .time{
    color: #999;
    padding: 5px 0 10px;
}
.content .text{
    line-height: 1.6;
    color: #666;
    text-align: justify;
    padding-bottom: 10px;
}
</style>