<template>
  <div id="mainapp">
    <loading-i></loading-i>
    <header-ii></header-ii>
    <body-ii></body-ii>
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
    
export default {
  components : {
    "header-ii" : Header,
    "body-ii" : Body,
    'loading-i' : Loading
  },
  created(){
    console.log("App component created");
  }
}
</script>
<style>
html,body{
  margin:0;
}
html,body,#app,#mainapp{
    height: 100%;
    width:100%;
    z-index: 1;
    position: relative;
}
</style>