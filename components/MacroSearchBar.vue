<template>
    <v-col cols="12" xl="6" lg="6" md="8" sm="8" xs="10" class="d-flex justify-center align-center">
        <v-text-field solo v-model="searchQuery"></v-text-field>
        <v-btn color="primary" class="ml-6 mb-7" @click="macroSearch()">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-col>
</template>
<script>
export default {
    data() {
        return {
            searchQuery: '',
        }
    },
    methods: {
        macroSearch() {
            alert('SEARCH!');
        }
    }
}
</script>