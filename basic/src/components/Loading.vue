<template>
  <div id="loading" :style="loading_style">
      <div class="text">{{loading_text}} <button @click="close">Close</button></div> 
  </div>
</template>

<script>
import {eventBus} from './../eventBus';
export default {
    data(){
        return{
            loading_style : {display: 'none'},
            loading_text : "loading..."
        }
    },
    methods:{
        close(){
            this.loading_style= {display: 'none'};
        }
    },
    created(){
        console.log("Loading component created11");
        eventBus.$on("changeloadingstyle",(data) => {
            console.log("in changeloadingStyle emitted event");
            this.loading_style=data.style;
            this.loading_text=data.text;
        });
    }
}
</script>
<style>
#loading{
    background-color: magenta;
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    opacity: .8;
}
#loading .text{
    background-color: yellowgreen;
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>
