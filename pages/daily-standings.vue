<template>
    <v-container fluid fill-height class="d-flex justify-center align-start standings-main ma-0 pa-0">
        <StandingsHeader />
        <v-expansion-panels accordion>
            <Meals v-for="meal in meals" :key="meal.id" :meal="meal" @dialogOpen="setDialog($event)" @deleteMeal="deleteMeal($event)"/>
        </v-expansion-panels>
        <div class="footer d-flex justify-space-around align-center pa-2">
            <DailyProgress v-for="progress in dailyProgress" :key="progress.idProgress" :progress="progress" />
        </div>
        <AddMeal />
    </v-container>
</template>

<script>
import Meals from '~/components/Meals.vue';
import DailyProgress from '~/components/DailyProgress.vue';
import StandingsHeader from '~/components/StandingsHeader.vue';
export default {
    data() {
        return {
            dialog: false,
            meals: null,
            dailyProgress: [
                {
                    idProgress: 1,
                    progressName: 'Fat',
                    progressLimit: this.$store.state.dailyLimits.fat,
                    progress: 20,
                    progressColor: "#e8e9a1"
                },
                {
                    idProgress: 2,
                    progressName: 'Sugar',
                    progressLimit: this.$store.state.dailyLimits.sugar,
                    progress: 20,
                    progressColor: "#ff9a00"
                },
                {
                    idProgress: 3,
                    progressName: 'Carbs',
                    progressLimit: this.$store.state.dailyLimits.carbs,
                    progress: 20,
                    progressColor: "#ff165d"
                },
                {
                    idProgress: 4,
                    progressName: 'Protein',
                    progressLimit: this.$store.state.dailyLimits.protein,
                    progress: 20,
                    progressColor: "#03a9f4"
                }
            ]
        };
    },
    methods: {
        async getAllMeals(){
            const date = this.$store.state.todaysDate.toISOString().substring(0, 10);
            const settings = await this.$axios.$get(`http://localhost:5500/mealslist/${date}`).then((res)=>{
                console.log(res);
                this.meals=res;
            })
        },

        deleteMeal(data){
            const arr = this.meals[data.id-1].data;
            this.meals[data.id-1].data = arr.filter(obj=> obj.id != data.mealId);
        }
    },
    computed: {
        dailyLimits() {
            return this.$store.state.dailyLimits;
        },
    },
    mounted(){
        this.getAllMeals()
    },
    components: { Meals, DailyProgress, StandingsHeader, }
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