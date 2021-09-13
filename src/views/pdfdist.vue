<template>
  <div>
    <div>{{ this.msg }}面</div>
    <div>pdfjs-dist的使用</div>
    <div>
      将pdf渲染成Canvas
    </div>
    <div>
      <!-- <canvas v-for="item in totalPage" :key="item" :id="'the-canvas' + item" class="pdf-content"></canvas> -->
    </div>
  </div>
</template>
<script>
// import PDFJS from "pdfjs-dist";
export default {
  name: "name2",
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
      totalPage: []
    };
  },
  created() {
    // let winW = document.documentElement.clientWidth;
    // let loadingTask = PDFJS.getDocument("/demo.gif");
    // loadingTask.promise.then(
    //   function(pdf) {
    //     let pageNum = pdf.numPages;
    //     for (let i = 1; i <= pageNum; i++) {
    //       pdf.getPage(i).then(function(page) {
    //         let viewport = page.getViewport(1);
    //         let scale = (winW / viewport.width).toFixed(2);
    //         let scaledViewport = page.getViewport(scale);
    //         let canvas = document.getElementById("the-canvas" + i);
    //         let context = canvas.getContext("2d");
    //         canvas.height = scaledViewport.height;
    //         canvas.width = scaledViewport.width;
    //         let renderContext = {
    //           canvasContext: context,
    //           viewport: scaledViewport
    //         };
    //         let renderTask = page.render(renderContext);
    //         renderTask.then(function() {});
    //       });
    //     }
    //   },
    //   function(reason) {
    //     console.error(reason);
    //   }
    // );
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
