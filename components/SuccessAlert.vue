<template>
   <v-alert v-model="alert" border="right" dense prominent type="success" class="alert success">{{ alertMsg }}</v-alert>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
data(){
    return{

    }
},
computed:{
    alert(){
        return this.$store.state.successAlert;
    },
    alertMsg(){
        return this.$store.state.alertMsg;
    }
}
}
</script>

<style>
.alert {
    position: fixed !important;
    top: 10%;
    right: 1%;
    width: auto;
    z-index: 20;
}
</style>