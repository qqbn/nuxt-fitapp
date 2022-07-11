<template>
    <v-container fluid fill-height class="bck ma-0">
        <v-row class="d-flex justify-center flex-column align-center my-12 px-4">
            <MacroSearchHeader />
            <MacroSearchBar />
            <MacroSearchTable />
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
        };
    },
    components: { MacroSearchBar, MacroSearchTable, MacroSearchHeader }
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