<template>
    <v-expansion-panel>
        <v-expansion-panel-header class="text-h6 ma-0">
            {{ meal.mealName }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-card class="elevation-0" v-for="(item, i) in 5" :key="i">
                <v-card-title class="text-body-1 ma-0">
                    Ingredient name
                    <v-spacer></v-spacer>
                    <v-icon color="primary" class="test ma-2 mt-4">mdi-delete</v-icon>
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
                <v-btn fab small color="primary">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    props: {
        meal: {
            mealName: String,
            idMeal: Number,
        }
    }
}

</script>

<style scoped>
@media only screen and (max-width: 480px) {
    .ingredient-macro {
        display: flex;
        flex-direction: column-reverse;
    }
}
</style>