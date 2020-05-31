<template>
  <div class="comment">
    <div class="commentDiv">
      <span>提交评论</span>
      <span>返回</span>
    </div>
    <form action>
      <textarea class="commentCont"  name value='' rows="3" placeholder="请输入评论内容"></textarea>
      <button class="commentBtn">提交评论</button>
    </form>
    <div class="commentDiv commentTit">
      <span>评论列表</span>
      <span>共44条评论</span>
    </div>
    <ul class="commentList">
      <li>
          <div class="commentUser">
              <span>喜欢喜欢我的你</span>
              <span>2020/5/31</span>
          </div>
          <p class="commentDes">这个电影很好看，细节很动人</p>
      </li>
        <li>
          <div class="commentUser">
              <span>喜欢喜欢我的你</span>
              <span>2020/5/31</span>
          </div>
          <p class="commentDes">这个电影很好看，细节很动人</p>
      </li>
        <li>
          <div class="commentUser">
              <span>喜欢喜欢我的你</span>
              <span>2020/5/31</span>
          </div>
          <p class="commentDes">这个电影很好看，细节很动人</p>
      </li>
    </ul>
    <a class="commentMore">加载更多评论</a>

    <!-- 评论加载更多 
    正常思路

    1. 完成页面布局

    2. 如何提交到对应的每一条数据－－－

    3. 商品和图文详情使用同一个评论模块，如何实现的

    4. 评论加载更多是如何实现的 
    -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ['cid'],
  mounted() {
      console.log('传递过来值---',  this.cid);
  },
  created(){
      let id = this.cid;
      // 根据id对，请求相应的评论数据
      // axios中的get请求，请求地址的拼接，如何实现加载更过的
      // get请求是在地址栏里?后边跟的请求参数
      //
      // this.$Axios.get().then();


  },
};
</script>
<style scoped>
.comment{
    padding: 10px 15px;
    border-top: 1px solid #ddd;
}
.commentDiv{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 15px 0;
}
.commentCont{
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 10px;
    line-height: 1.5;
    color: #666;
    font-size: 14px;
}
.commentCont:focus{
    outline: none;
}
.commentBtn{
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #618ef0;
    border-radius: 4px;
    margin: 15px 0;
}


.commentTit{
     border-bottom: 1px solid #ddd;
     margin-bottom: 15px;
}
.commentList{
    display: block;
}
.commentList li{
    margin-bottom: 15px;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 5px;
}
.commentList li:last-child{
    border-bottom: 0;
}
.commentUser{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color:coral;
}
.commentUser span:nth-child(2){
    color: #999;
}
.commentDes{
    font-size: 14px;
    color: #666;
    padding: 15px 0 10px;
}
.commentMore{
    border: 1px solid #618ef0;
    color: #618ef0;
    width: 100%;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
    display: block;
    margin:10px 0 20px;
}
</style>