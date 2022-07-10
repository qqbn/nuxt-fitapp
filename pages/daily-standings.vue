<template>
    <v-container fluid fill-height class="d-flex justify-center align-start standings-main ma-0 pa-0">
        <div class="
                standings-header
                d-flex
                justify-space-around
                align-center
                flex-column
                py-6
            ">
            <div class="
                    mb-4
                    date-picker
                    d-flex
                    justify-space-between
                    align-center
                    pa-4
                ">
                <v-btn fab small color="primary" class="mr-4" @click="test()">
                    <v-icon> mdi-arrow-left-drop-circle </v-icon>
                </v-btn>
                <v-dialog v-model="modal" :return-value.sync="date" width="290px" ref="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" fab v-bind="attrs" v-on="on" class="text-h6">{{ date.slice(-2) }}</v-btn>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false">
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                            Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
                <v-btn fab small color="primary" class="ml-4">
                    <v-icon> mdi-arrow-right-drop-circle </v-icon>
                </v-btn>
            </div>
            <v-card class="progress d-flex justify-center align-center flex-column">
                <v-progress-circular :rotate="360" :size="150" :width="15" :value="value" color="primary">
                    {{ value }}
                </v-progress-circular>
            </v-card>
            <p class="text d-flex justify-center align-center mt-2">
                1200/2400 kcal
            </p>
        </div>
        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, i) in 10" :key="i">
                <v-expansion-panel-header class="text-h6 ma-0">
                    Breakfest
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card class="elevation-0" v-for="(item, i) in 5" :key="i">
                        <v-card-title class="text-body-1 ma-0">
                            Ingredient name
                            <v-spacer></v-spacer>
                            <v-icon color="primary" class="test ma-2 mt-4" @click="testFunc()">mdi-delete</v-icon>
                        </v-card-title>
                        <v-card-text class="
                                d-flex
                                justify-space-around
                                align-center
                                ma-0
                            ">
                            <p class="font-weight-bold ingredient-macro">
                                30 <span class="primary--text">KCAL</span>
                            </p>
                            <p class="font-weight-bold ingredient-macro">
                                30g <span class="primary--text">FAT</span>
                            </p>
                            <p class="font-weight-bold ingredient-macro">
                                30g <span class="primary--text">CARBS</span>
                            </p>
                            <p class="font-weight-bold ingredient-macro">
                                30g <span class="primary--text">PROTEIN</span>
                            </p>
                        </v-card-text>
                    </v-card>
                    <div class="d-flex mt-4">
                        <v-spacer></v-spacer>
                        <v-btn fab small color="primary" @click="testFunc()">
                            <v-icon>mdi-plus-circle-outline</v-icon>
                        </v-btn>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="footer d-flex justify-space-around align-center pa-2">
            <div class="small-progress">
                <p class="macro-name">Fat</p>
                <p>20/80g</p>
                <v-progress-linear color="#e8e9a1" height="10" value="10" width="25" striped></v-progress-linear>
            </div>
            <div class="small-progress">
                <p class="macro-name">Sugar</p>
                <p>20/80g</p>
                <v-progress-linear color="#ff9a00" height="10" value="10" width="25" striped></v-progress-linear>
            </div>
            <div class="small-progress">
                <p class="macro-name">Carbs</p>
                <p>20/80g</p>
                <v-progress-linear color="#ff165d" height="10" value="10" width="25" striped></v-progress-linear>
            </div>

            <div class="small-progress">
                <p class="macro-name">Protein</p>
                <p>20/80g</p>
                <v-progress-linear color="light-blue" height="10" value="10" width="25" striped></v-progress-linear>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            value: 50,
            menu: false,
            modal: false,
            menu2: false,
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substring(0, 10),
            headers: [
                { text: "Calories", value: "calories", sortable: false },
                { text: "Fat (g)", value: "fat", sortable: false },
                { text: "Carbs (g)", value: "carbs", sortable: false },
                { text: "Protein (g)", value: "protein", sortable: false },
            ],
            breakfest: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: "1%",
                },
            ],
        };
    },
    methods: {
        testFunc() {
            alert("hi");
        },
        test() {
            console.log(this.date);
        }
    },
};
</script>

<style scoped>
.table {
    width: 90%;
}

.test {
    cursor: pointer;
}

.standings-main {
    background-color: white !important;
}

.standings-header {}

.progress {
    border-radius: 50% !important;
    min-height: 200px;
    min-width: 200px;
}

.text {
    font-size: 24px;
    width: 100%;
    text-align: center;
}

.footer {
    width: 100%;
    height: 150px;
    top: 100%;
    position: sticky;
}

.small-progress {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.macro-name {
    color: #26a69a;
}


@media only screen and (max-width: 480px) {
    .ingredient-macro {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>