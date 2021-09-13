<template>
  <div>
    {{ this.msg }}面
    <div>
      <!-- <iframe src="" frameborder="0"></iframe> -->
      <iframe id="iframe" :src="src" frameborder="0"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "name",
  props: {
    // msg:String
  },
  components: {
    // HelloWorld
  },
  watch: {
    // msg: {
    //   handler(newVal, oldVal) {
    //     this.init();
    //   },
    //   deep: true,
    //   immediate:true
    // }
  },
  data() {
    return {
      msg: "pdf的页面",
      src: "/web/viewer.html" + "?file=" + "/demo.pdf"
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 900px;
}
</style>
