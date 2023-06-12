<template>
    <v-col cols="12" class="pa-0">
        <v-card cols="12" xl="10" lg="10" md="8" sm="8" xs="12">
            <v-data-table :headers="headers" :items="this.dishes" hide-default-footer class="elevation-1">
            </v-data-table>
        </v-card>
    </v-col>
</template>
<script>
export default {
    props: ['dishes'],
    data() {
        return {
            headers: [
                {
                    text: "Name",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Serving size(g)", value: "size", sortable: false },
                { text: "Calories", value: "calories", sortable: false },
                { text: "Fat (g)", value: "fat", sortable: false },
                { text: "Carbs (g)", value: "carbs", sortable: false },
                { text: "Protein (g)", value: "protein", sortable: false },
                { text: "Sugar (g)", value: "sugar", sortable: false },
                { text: "Sodium (mg)", value: "sodium", sortable: false },
                {
                    text: "Cholesterol (mg)",
                    value: "cholesterol",
                    sortable: false,
                },
                { text: "Satured fat (g)", value: "satured", sortable: false },
                { text: "Fiber (g)", value: "fiber", sortable: false },
            ],
        }
    }
}
</script>
<style scoped>
.v-data-footer__select {
    margin-right: 0;
}
</style>