<template>
   <v-alert v-model="alert" border="right" dense prominent type="error" class="alert error">{{ alertMsg }}</v-alert>
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
        return this.$store.state.errorAlert;
    },
    alertMsg(){
        return this.$store.state.alertMsg;
    }
}
}
</script>
