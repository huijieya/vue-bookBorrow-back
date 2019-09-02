<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
@font-face {
  font-family: 'iconfont';  /* project id 1179713 */
  src: url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.eot');
  src: url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1179713_n1crgv40xfm.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
