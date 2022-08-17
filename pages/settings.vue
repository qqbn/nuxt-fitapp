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
                        <v-text-field solo type="number" v-model="dailyLimits.calories"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Fat (g)</h4>
                        <v-text-field solo type="number" v-model="dailyLimits.fat"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Sugar (g)</h4>
                        <v-text-field solo type="number" v-model="dailyLimits.sugar"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Carbs (g)</h4>
                        <v-text-field solo type="number" v-model="dailyLimits.carbs"></v-text-field>
                    </v-col>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="8" xs="8">
                        <h4 class="text-center">Protein (g)</h4>
                        <v-text-field solo type="number" v-model="dailyLimits.protein"></v-text-field>
                    </v-col>

                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" @click="setSettings(dailyLimits)">SAVE</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
        }
    },
    methods: {
        ...mapMutations(['setSettings']),
    },
    computed: {
        dailyLimits: {
            get() {
                return this.$store.state.dailyLimits;
            }
        }
    }
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
