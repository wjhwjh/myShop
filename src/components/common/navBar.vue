<template>
    <div class="navBar">
         <!-- <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button> -->
         <span class="backIcon" @click="goBack"><img src="../../../static/img/back.png"></span>
        {{title}}
    </div>
</template>
<script>
export default {
    name:'navBar',
    props:['title'],
    data(){
        return {}
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.navBar{
    height: 30px;
    width: 100%;
    background:rgba(121, 122, 235, 0.404);
    color: #333;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    position: relative;
}
.navBar .backIcon {
    float: left;
    width: 20px;
    height: 20px;
    position:absolute;
    left: 10px;
    top: 5px;

}
.navBar .backIcon img{
    width: 100%;
    height: auto;
}
</style>
