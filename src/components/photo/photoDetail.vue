<template>
  <div>
    <navBar title="图片详情"></navBar>
    <div class="content">
        <!-- {{dataPhotoImg}}
        {{dataPhotoImg[0]}}
        <img :src="dataPhotoImg[0]" alt="" width="100%" height="200px"> -->
        <ul>
          <li v-for="{url, index} in dataPhotoImg.imgUrlBig" :key="index">
             <!-- <img :src="url" alt="" width="100%" height="200px"> -->
             {{url}}
             {{idex}}
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { dataPhotoDetailImg } from "./data.js";
export default {
  data() {
    return {
      dataPhotoImg:[],
    };
  },
  mounted() {
    //console.log(dataPhotoDetailImg);

       console.log(this.$route.query.id);
      // 这里图片的借口和文案内容的接口是不同的，在请求后台的时候需要进行并发请求
      // 图片预览功能
      let queryId = this.$route.query.id;
      this.dataPhotoImg = dataPhotoDetailImg.filter(item=>item.id==queryId)[0]

     console.log(typeof this.dataPhotoImg);
  },
  created() {
   
      




  },
  methods: {}
};
</script>
<style lang="css" scoped>
</style>