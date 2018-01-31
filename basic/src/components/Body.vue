<template>
  <div id="body">
      Body
      <router-view></router-view>
  </div>
</template>
<script>
export default {
   created(){
    console.log("Body component created");
  }
}
</script>
<style>
#body{
    background-color: orange;
    height : 90vh;
}
</style>
