<template>
  <div id="animal">
      Animal
  </div>
</template>

<script>
import {eventBus} from './../../eventBus';

export default {
  beforeRouteEnter(to,from,next){
      console.log("animal beforeRouteEnter");
        next();
    } ,
  created(){
    console.log("Animal component created");
    eventBus.changeloadingStyle("Animal");
  }
}
</script>
<style>
#animal{
    background-color: green;
}
</style>
