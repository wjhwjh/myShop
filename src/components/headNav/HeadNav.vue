<template>
  <div>
    <mt-header :title="title" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "HeadNav",
  props: ["title"],
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style >
</style>
