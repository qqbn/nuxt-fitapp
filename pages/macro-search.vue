<template>
    <v-container fluid fill-height class="bck ma-0">
        <v-row
            class="d-flex justify-center flex-column align-center my-12 px-4"
        >
            <v-col cols="12" class="text-center">
                <h3 class="mt-10 mb-4 header">
                    Just type the name of dish. We will try to find its
                    macronutrients
                </h3>
            </v-col>
            <v-col
                cols="12"
                xl="10"
                lg="10"
                md="8"
                sm="8"
                xs="12"
                class="d-flex justify-center align-center"
            >
                <v-text-field solo></v-text-field>
                <v-btn color="primary" class="ml-6 mb-7"
                    ><v-icon>mdi-magnify</v-icon></v-btn
                >
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                    ></v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            bool: false,
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
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: "1%",
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: "1%",
                },
                {
                    name: "Eclair",
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
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
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: "16%",
                },
            ],
        };
    },
};
</script>

<style scoped>
.header {
    color: #26a69a;
}
.test {
    background: red;
}
@media only screen and (max-width: 600px) {
    .bck {
        background-color: white !important;
        background-image: none !important;
    }
}
</style>