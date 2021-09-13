const path = require("path");
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join("node_modules", "vant")) ? 375 : 750;
  return {
    plugins: {
      // 注意：vant团队的是根据375px的设计稿去做的，所以我们要判断如果是vant的样式，要以375去适配
      // 4.⻚⾯整体要有padding，不能贴边写
      autoprefixer: {}, // ⽤来给不同的浏览器⾃动添加相应前缀，如-webkit-，-moz-等等
      "postcss-px-to-viewport": {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: designWidth, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即⼩数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进⾏转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: [], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，⼩于或等于1px则不进⾏转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进⾏转换，默认false
        replace: true, // 是否转换后直接更换属性值
        // exclude: [/node_modules/], // 设置忽略⽂件，⽤正则做⽬录名匹配
        landscape: false // 是否处理横屏情况
      }
    }
  };
};
