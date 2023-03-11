<template>
    <div class="standings-header d-flex justify-space-around align-center flex-column py-6">
        <StandingsDate />
        <v-card class="progress d-flex justify-center align-center flex-column">
            <v-progress-circular :rotate="360" :size="150" :width="15" :value="circleValue" color="primary">
                {{ circleValue }}
            </v-progress-circular>
        </v-card>
        <p class="text d-flex justify-center align-center mt-2">
            {{currentCalories}}/{{dailyCalories}} kcal
        </p>
    </div>
</template>
<script>
import { data } from 'browserslist';
import StandingsDate from './StandingsDate.vue';
export default {
    components: { StandingsDate },
    data() {
        return {
            circleValue: 0,
        }
    },
    computed: {
        dailyCalories() {
            return this.$store.state.dailyLimits.calories;
        },
        currentCalories(){
            return this.$store.state.currentCalories;
        }
    },
    mounted(){
        console.log(this.currentCalories);
        console.log(this.dailyCalories);
        this.circleValue=(this.currentCalories/this.dailyCalories)*100;
        this.circleValue=Math.round(this.circleValue);
        console.log(this.circleValue);
    },
}
</script>

<style scoped>
.table {
    width: 90%;
}


.standings-main {
    background-color: white !important;
}

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
</style>