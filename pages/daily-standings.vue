<template>
    <v-container fluid fill-height class="d-flex justify-center align-start standings-main ma-0 pa-0">
        <StandingsHeader />
        <v-expansion-panels accordion>
            <Meals v-for="meal in meals" :key="meal.id" :meal="meal" @dialogOpen="setDialog($event)" @deleteMeal="deleteMeal($event)"/>
        </v-expansion-panels>
        <div class="footer d-flex justify-space-around align-center pa-2">
            <DailyProgress v-for="progress in dailyProgress" :key="progress.idProgress" :progress="progress" />
        </div>
        <AddMeal @addMeal="addMeal($event)" @editMeal="editMeal($event)" @stateRefresh="stateRefresh($event)" />
        <SuccessAlert />
    </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Meals from '~/components/Meals.vue';
import DailyProgress from '~/components/DailyProgress.vue';
import StandingsHeader from '~/components/StandingsHeader.vue';
import SuccessAlert from '~/components/SuccessAlert.vue';
export default {
    components: { Meals, DailyProgress, StandingsHeader, },
    data() {
        return {
            dialog: false,
            meals: [],
            controller: this.$axios.CancelToken.source(),
            isPending: false,
            dailyProgress: [
                {
                    idProgress: 1,
                    progressName: 'Fat',
                    progressLimit: this.$store.state.dailyLimits.fat,
                    progress: 0,
                    progressColor: "#e8e9a1"
                },
                {
                    idProgress: 2,
                    progressName: 'Sugar',
                    progressLimit: this.$store.state.dailyLimits.sugar,
                    progress: 0,
                    progressColor: "#ff9a00"
                },
                {
                    idProgress: 3,
                    progressName: 'Carbs',
                    progressLimit: this.$store.state.dailyLimits.carbs,
                    progress: 0,
                    progressColor: "#ff165d"
                },
                {
                    idProgress: 4,
                    progressName: 'Protein',
                    progressLimit: this.$store.state.dailyLimits.protein,
                    progress: 0,
                    progressColor: "#03a9f4"
                }
            ]
        };
    },
    methods: {
        ...mapMutations(['setCurrentCalories', 'changeCurrentCalories']),

        async getAllMeals(){
            this.isPending=!this.isPending;
            const date = this.$store.state.todaysDate.toISOString().substring(0, 10);
            const settings = await this.$axios.$get(`http://localhost:5500/mealslist/${date}`,{cancelToken: this.controller.token}).then((res)=>{
                this.isPending=!this.isPending;
                this.meals=res[0];
                this.stateRefresh(res[1]);
            }).catch((err)=>{
                console.log(err);
            });
        },

        addMeal(data){
            this.meals.forEach(element => {
                if(element.id === data.meal_id){
                    element.data.push(data);
                    this.dailyProgress[0].progress+=Number(data.meal_fat);
                    this.dailyProgress[1].progress+=Number(data.meal_sugar);
                    this.dailyProgress[2].progress+=Number(data.meal_carbs);
                    this.dailyProgress[3].progress+=Number(data.meal_protein);
                    this.changeCurrentCalories(Number(data.meal_calories));
                }
            });
        },

        editMeal(data){
            const mealsDetails = this.meals.find(obj => obj.id===data.editingMeal);
            const index = this.meals.indexOf(mealsDetails);
            const element = mealsDetails.data.find(obj => obj.id == data.editingMealId);
            const elementIndex = mealsDetails.data.indexOf(element);
            this.meals[index].data[elementIndex].meal_calories=Number(data.meal_calories);
            this.meals[index].data[elementIndex].meal_carbs=Number(data.meal_carbs);
            this.meals[index].data[elementIndex].meal_fat=Number(data.meal_fat);
            this.meals[index].data[elementIndex].meal_name=(data.meal_name);
            this.meals[index].data[elementIndex].meal_protein=Number(data.meal_protein);
            this.meals[index].data[elementIndex].meal_sugar=Number(data.meal_sugar);
        },

        deleteMeal(data){
            const mealsDetails = this.meals.find(obj => obj.id===data.id);
            const index = this.meals.indexOf(mealsDetails);
            const standings = mealsDetails.data.find(obj => obj.id == data.mealDetailId);
            this.meals[index].data = mealsDetails.data.filter(obj=> obj.id != data.mealDetailId);
            if(standings){
                this.dailyProgress[0].progress-=Number(standings.meal_fat);
                this.dailyProgress[1].progress-=Number(standings.meal_sugar);
                this.dailyProgress[2].progress-=Number(standings.meal_carbs);
                this.dailyProgress[3].progress-=Number(standings.meal_protein);
            }
            this.changeCurrentCalories(-Number(data.mealCalories));
        },

        stateRefresh(data){
            this.dailyProgress[0].progress=data.fat;
            this.dailyProgress[1].progress=data.sugar;
            this.dailyProgress[2].progress=data.carbs;
            this.dailyProgress[3].progress=data.protein;
            this.setCurrentCalories(data.kcal);
        }
    },
    computed: {
        dailyLimits() {
            return this.$store.state.dailyLimits;
        },
    },
    computed: mapState(['todaysDate']),
    watch: {
        todaysDate(newVal, oldVal){
            // newVal.toISOString().substring(0, 10) != oldVal.toISOString().substring(0, 10)
            if(newVal.toISOString().substring(0, 10) != oldVal.toISOString().substring(0, 10)){
                if(this.isPending){
                    this.controller.cancel();
                    this.isPending=!this.isPending;
                }
                this.controller=this.$axios.CancelToken.source();
                this.getAllMeals();
            }
        }
    },
    mounted(){
        this.getAllMeals()
    },
};
</script>

<style scoped>
.standings-main {
    background-color: white !important;
}

.footer {
    width: 100%;
    height: 150px;
    top: 100%;
    position: sticky;
}
</style>