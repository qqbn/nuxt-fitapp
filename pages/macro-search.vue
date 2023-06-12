<template>
    <v-container fluid fill-height class="bck ma-0">
        <v-row class="d-flex justify-center flex-column align-center my-12 px-4">
            <MacroSearchHeader />
            <MacroSearchBar @addDish="addDish($event) "/>
            <MacroSearchTable :dishes="dishes" />
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import MacroSearchBar from '~/components/MacroSearchBar.vue';
import MacroSearchTable from '~/components/MacroSearchTable.vue';
import MacroSearchHeader from '../components/MacroSearchHeader.vue';
export default {
    data() {
        return {
            dishes: [],
        };
    },
    components: { MacroSearchBar, MacroSearchTable, MacroSearchHeader },
    methods:{
        addDish(data){
            if(this.dishes.length===5){
                this.dishes.shift();
                this.dishes.push(data);
            }else{
                this.dishes.push(data);
            }
        }
    }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .bck {
        background-color: white !important;
        background-image: none !important;
    }
}
</style>