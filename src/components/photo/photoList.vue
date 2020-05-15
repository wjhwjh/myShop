<template>
  <div>
    <div class="nav-wrap">
      <ul class="nav">
        <li v-for="(nav, index) in photoNav" :key="index" @click="handelNav(index, nav.showId)">
          <a href="javascript:void(0)" :class="{'active': index==currentIndex}">{{nav.navName}}</a>
        </li>
      </ul>
    </div>

    <ul class="listUl">
      <li v-for="(item, index) in dataPhoto" :key="index">
        <router-link :to="{name:'photo.detail', query:{id:item.id}}">
          <img :src="item.imgurl" alt />
          <div class="des">
            <p>{{item.title}}</p>
            <div class="del">
              <span>国籍: {{item.from}}</span>
              <span>时长: {{item.timeLength}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { dataPhotoList, photoNav } from "./data.js";
export default {
  data() {
    return {
      dataPhoto: dataPhotoList,
      photoNav,
      currentIndex: 0
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    handelNav(index, showId) {
      //console.log(showId);
      this.currentIndex = index;
      this.$router.push({ name: "photo.list", params: { showId: showId } });
    },
    getPhotoData(paramsId) {
      // 路由更新的时请求数据，数据驱动视图的更新
      if (paramsId == 1) {
        this.dataPhoto = dataPhotoList;
      } else {
        this.dataPhoto = dataPhotoList.filter(item => item.showId == paramsId);
      }

      if (this.dataPhoto.length == 0) {
        this.$toast({
          message: "没有数据",
          duration: 1000 //持续时间（毫秒），若为 -1 则不会自动关闭
          // iconClass: 'icon icon-success', //icon 图标的类名
        });
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    //console.log('路由守卫--',to);
    let paramsId = to.params.showId;
    this.getPhotoData(paramsId);

    next();
  },
  beforeRouteEnter(to, from, next) {
    //console.log('首次进入路由--',to);

    next(vm => {
      let paramsId = to.params.showId;
      vm.getPhotoData(paramsId);
      vm.currentIndex =  paramsId*1-1;
      //vm.dataPhoto = dataPhotoList;
    });
    next();
  }
};
</script>
<style lang="css" scoped>
.nav-wrap {
  width: 100%;
  overflow: hidden;
  height: 38px;
}
.nav {
  height: 38px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background: #fafafa;
}
.nav li {
  width: 65px;
  flex: 0 0 65px;
}
.nav li a {
  font-size: 14px;
  color: #333;
  /* font-weight: bold; */
  display: block;
  line-height: 36px;
  text-align: center;
}
.nav li a.active {
  color: salmon;
  font-weight: bold;
}
.listUl {
  padding: 0 15px;
}
.listUl li {
  position: relative;
  margin-top: 15px;
}
.listUl li .des {
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  padding: 10px 15px;
}
.listUl li a img {
  width: 100%;
  display: block;
}
.listUl li a {
  color: #fff;
}
.listUl li a .del {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding-top: 10px;
}
</style>