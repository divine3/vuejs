<template>
  <div id="header">
      <div>Header</div>
      <div>
          <router-link to="/">Home</router-link>
          <router-link to="/plant">Plant</router-link>
          <router-link to="/planet">Planet</router-link>
      </div>
  </div>
</template>
<script>
export default {
   created(){
    console.log("Header component created");
  }
}
</script>

<style>
#header{
    background-color: yellow;
    height : 10vh;
}
</style>
