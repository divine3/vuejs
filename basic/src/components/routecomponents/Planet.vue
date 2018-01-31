<template>
  <div id="planet">
      Planet
  </div>
</template>

<script>
import {eventBus} from './../../eventBus';

export default {
  beforeRouteEnter(to,from,next){
      console.log("Planet beforeRouteEnter");
        next();
    } ,
  created(){
    console.log("Planet component created");
     eventBus.changeloadingStyle("Planet");
  }  
}
</script>
<style>
#planet{
    background-color: red;
}
</style>
