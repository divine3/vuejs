import Vue from 'vue';
export const eventBus = new Vue({
    methods :{
        changeloadingStyle(message){
            console.log("in changeloadingStyle method");
            var data = {"text" : message +" loading...","style" : {display: 'block'}};
            this.$emit("changeloadingstyle",data);
        }
    }
});