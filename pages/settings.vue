<template>
    <v-container fluid fill-height class="settings-main ma-0 d-flex justify-center align-start">
        <v-col cols="12" xl="6" lg="6" md="6" sm="10" xs="12" class="py-12">
            <v-card class="card">
                <v-card-title class="headline">
                    Set your daily goals below:
                </v-card-title>
                <v-card-text class="content d-flex justify-space-around align-center flex-column">
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Calories</h4>
                        <v-text-field solo type="number" :value="calories" @input="setCalories"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Fat (g)</h4>
                        <v-text-field solo type="number" :value="fat" @input="setFat"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Sugar (g)</h4>
                        <v-text-field solo type="number" :value="sugar" @input="setSugar"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Carbs (g)</h4>
                        <v-text-field solo type="number" :value="carbs" @input="setCarbs"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Protein (g)</h4>
                        <v-text-field solo type="number" :value="protein" @input="setProtein"></v-text-field>
                    </v-col>

                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="setSettings">SAVE</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            test: null,
        }
    },
    methods: {
        setCalories(event) {
            this.$store.commit('setCalories', event);
        },
        setFat(event) {
            this.$store.commit('setFat', event);
        },
        setSugar(event) {
            this.$store.commit('setSugar', event);
        },
        setCarbs(event) {
            this.$store.commit('setCarbs', event);
        },
        setProtein(event) {
            this.$store.commit('setProtein', event);
        },
        ...mapActions(['setSettings'])

    },
    computed: {
        calories() {
            return this.$store.state.calories;
        },
        fat() {
            return this.$store.state.fat;
        },
        sugar() {
            return this.$store.state.sugar;
        },
        carbs() {
            return this.$store.state.carbs;
        },
        protein() {
            return this.$store.state.protein;
        },
        dailyLimits() {
            return this.$store.state.dailyLimits;
        }
    },
};
</script>

<style scoped>
.headline,
h4 {
    color: #26a69a;
}


@media(max-width: 480px) {

    .v-card__title {
        font-size: 18px !important;
    }
}
</style>
