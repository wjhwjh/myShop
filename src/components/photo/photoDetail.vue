<template>
  <div>
    <navBar title="图片详情"></navBar>
    <div class="content">
        {{dataPhotoDetailImg}}
    </div>
  </div>
</template>
<script>
import { dataPhotoDetailImg } from "./data.js";
export default {
  data() {
    return {
      dataPhotoDetailImg
    };
  },
  mounted() {
    //console.log(dataPhotoDetailImg);
  },
  created() {
      console.log(this.$route.query.id);
      // 这里图片的借口和文案内容的接口是不同的，在请求后台的时候需要进行并发请求
      // 图片预览功能
      
      


      




  },
  methods: {}
};
</script>
<style lang="css" scoped>
</style>