<template>
  <div>
    <h1>pdf按页进行预览</h1>
    <div>
      <pdf :page="pageNum" :src="pdfUrl" @progress="loadedRatio = $event" @num-pages="pageTotalNum = $event"></pdf>
    </div>
    <div class="pagination_box">
      <el-pagination
        background
        @current-change="handlePdfChange"
        :current-page="pageNum"
        :page-size="1"
        layout="prev, pager, next"
        :total="pageTotalNum"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
import Vue from "vue";
import { Pagination } from "element-ui";
Vue.use(Pagination);
export default {
  name: "pdfPage",
  props: {
    // msg:String
  },
  components: {
    // HelloWorld
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
      pdfUrl: "/demo.pdf",
      pageTotalNum: 1,
      pageNum: 1,
      loadedRatio: 0
    };
  },
  created() {},
  methods: {
    handlePdfChange(val) {
      this.pageNum = Number(val);
    },
    rePage() {
      let page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },

    // 下一页
    nextPage() {
      let page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    }
  }
};
</script>
<style lang="scss" scoped></style>
