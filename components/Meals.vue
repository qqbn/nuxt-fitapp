<template>
    <v-expansion-panel class="">
        <v-expansion-panel-header class="daily-meal-header text-h6 ma-0 primary--text">
            <span class="black--text">{{ meal.mealName }}</span>
            <v-spacer></v-spacer>
            {{ mealCalories }}kcal
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div v-if="meal.data.length>0">
            <v-card class="elevation-0 meal-card" v-for="mealData in meal.data" :key="mealData.id">
                <v-card-title class="text-body-1 ma-0">
                    {{ mealData.meal_name }}
                    <v-spacer></v-spacer>
                    <v-icon color="primary" class="test ma-2 mt-4" @click="editMeal(meal.id, mealData)">mdi-file-edit</v-icon>
                    <v-icon color="primary" class="test ma-2 mt-4" @click="deleteMeal(meal.id, mealData.id, mealData.meal_calories)">mdi-delete</v-icon>
                </v-card-title>
                <v-card-text class="
                                single-meal
                                d-flex
                                justify-space-between
                                align-center
                                ma-0
                                pa-0
                            ">
                    <p class="font-weight-bold ingredient-macro">
                        {{ mealData.meal_calories }} <span class="primary--text">KCAL</span>
                    </p>
                    <p class="font-weight-bold ingredient-macro">
                        {{ mealData.meal_fat }} <span class="primary--text">FAT</span>
                    </p>
                    <p class="font-weight-bold ingredient-macro">
                        {{ mealData.meal_carbs }} <span class="primary--text">CARBS</span>
                    </p>
                    <p class="font-weight-bold ingredient-macro">
                        {{ mealData.meal_protein }} <span class="primary--text">PROTEIN</span>
                    </p>
                    <p class="font-weight-bold ingredient-macro">
                        {{ mealData.meal_sugar }} <span class="primary--text">SUGAR</span>
                    </p>
                </v-card-text>
            </v-card>
            </div>
            <p class="text-xs-body-2" v-else>
                There is no meals added today
            </p>
            <div class="d-flex mt-4">
                <v-spacer></v-spacer>
                <v-btn fab small color="primary" @click="addMeal(meal.id)">
                    <v-icon>mdi-plus-circle-outline</v-icon>
                </v-btn>
            </div>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        meal: {
            mealName: String,
            id: Number,
            data: Array, 
        }
    },
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        async deleteMeal(id, mealDetailId, mealCalories){
            const request = await this.$axios.$post(`http://localhost:5500/deletemeal/${mealDetailId}`).then((res)=>{
                if(res){
                    this.$emit('deleteMeal', {id, mealDetailId, mealCalories});
                    this.showAlert('Meal has been deleted!');
                }
             }).catch((error)=>{
                this.showErrorAlert('There is an error with deleting a meal!');
             });
        },
        editMeal(id, meal){
            this.toggleDialog(id);
            const event = new CustomEvent('editDialog', {detail: {meal, id}});
            window.dispatchEvent(event);
        },
        addMeal(id){
            this.toggleDialog(id);
            const event = new CustomEvent('editDialog', {detail: null});
            window.dispatchEvent(event);
        },

        ...mapMutations(["toggleDialog", "showAlert", "showErrorAlert"])
    },
    computed:{
        mealCalories(){
            let mealCalories=0;
            this.meal.data.forEach(element => {
                mealCalories += element.meal_calories;
            });

            return mealCalories;
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

    .single-meal {
        padding: 0;
        flex-wrap: wrap;
    }

    .meal-card {
        padding: 0;
        margin: 0;
    }

    .daily-meal-header {
        font-size: 16px !important;
    }
}
</style>