<template>
  <div>
    <div>{{ this.msg }}面</div>
    <div>
      基于vue-pdf的插件进行，
    </div>
    <div>
      <pdf ref="pdf" src="/demo.pdf" v-for="i in numPages" :key="i" :page="i"></pdf>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
// import
export default {
  name: "name",
  props: {
    // msg:String
  },
  components: {
    pdf
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
      numPages: null
    };
  },
  created() {},
  mounted() {
    this.getNumPages();
  },
  methods: {
    // 获取pdf的页数
    getNumPages() {
      let loadingTask = pdf.createLoadingTask("/demo.pdf");
      loadingTask.promise
        .then((pdf) => {
          this.numPages = pdf.numPages;
          this.numPages = 3;
        })
        .catch((err) => {
          console.error("pdf 加载失败", err);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
