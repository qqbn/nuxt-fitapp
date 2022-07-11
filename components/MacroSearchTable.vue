<template>
    <v-col cols="12" class="pa-0">
        <v-card cols="12" xl="10" lg="10" md="8" sm="8" xs="12">
            <v-data-table :headers="headers" :items="desserts" hide-default-footer class="elevation-1">
            </v-data-table>
        </v-card>
    </v-col>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                {
                    text: "Name",
                    align: "start",
                    sortable: false,
                    value: "name",
                },
                { text: "Serving size(g)", value: "calories", sortable: false },
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
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6,
                    carbs: 24,
                    protein: 4,
                    iron: "1%",
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9,
                    carbs: 37,
                    protein: 4.3,
                    iron: "1%",
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16,
                    carbs: 23,
                    protein: 6,
                    iron: "7%",
                },
                {
                    name: "Cupcake",
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: "8%",
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                    fat: 16,
                    carbs: 49,
                    protein: 3.9,
                    iron: "16%",
                },
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