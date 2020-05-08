<template>
    <div>
        新闻详情
    </div>
</template>
 <script>
 import data from "./data.js";
export default{
     data(){
         return{
             dataDetail:data.dataDetail
         }
     },
     created(){
       console.log(this.$route.params.id);
       console.log(this.dataDetail)

     }
 }
 </script>
 <style scoped>
 
 </style>