<template>
    <v-container fluid fill-height class="d-flex justify-center align-start standings-main ma-0 pa-0">
        <StandingsHeader />
        <v-expansion-panels accordion>
            <Meals v-for="meal in meals" :key="meal.idMeal" :meal="meal" @dialogOpen="setDialog($event)" />
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
            headers: [
                { text: "Calories", value: "calories", sortable: false },
                { text: "Fat (g)", value: "fat", sortable: false },
                { text: "Carbs (g)", value: "carbs", sortable: false },
                { text: "Protein (g)", value: "protein", sortable: false },
            ],
            meals: [
                {
                    mealName: 'Breakfest',
                    idMeal: 1,
                },
                {
                    mealName: 'Second Breakfest',
                    idMeal: 2,
                },
                {
                    mealName: 'Lunch',
                    idMeal: 3,
                },
                {
                    mealName: 'Snack',
                    idMeal: 4,
                },
                {
                    mealName: 'Dinner',
                    idMeal: 5,
                },
                {
                    mealName: 'Training',
                    idMeal: 6,
                },
            ],
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
        testFunc() {
            alert("hi");
        },
        test() {
            console.log(this.date);
        },
    },
    computed: {
        dailyLimits() {
            return this.$store.state.dailyLimits;
        },
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