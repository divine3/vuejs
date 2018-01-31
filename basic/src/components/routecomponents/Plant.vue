<template>
  <div id="plant">
      Plant
  </div>
</template>

<script>
import {eventBus} from './../../eventBus';

export default {
  beforeRouteEnter(to,from,next){
      console.log("Plant beforeRouteEnter");
        next();
    } ,
  created(){
    console.log("Plant component created");
     eventBus.changeloadingStyle("Planet");
  }  
}
</script>
<style>
#plant{
    background-color: blue;
}
</style>
