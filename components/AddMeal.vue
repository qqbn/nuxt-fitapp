<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-form @submit="sendData">
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="toggleDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Adding new meal</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text type="submit">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-row class="pa-0 ma-0" justify="center" fullscreen>
                    <v-list max-width="600px" class="overflow-hidden">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="primary--text">Meal name</v-list-item-title>
                                <v-text-field solo type="text" class="mt-2" v-model="meal.name">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="primary--text">Meal name</v-list-item-title>
                                <v-text-field solo type="number" class="mt-2" v-model="meal.calories">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Fat</v-list-item-title>
                                <v-text-field solo type="number" v-model="meal.fat">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Carbohydrates</v-list-item-title>
                                <v-text-field solo type="number" v-model="meal.carbohydrate">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Protein</v-list-item-title>
                                <v-text-field solo type="number" v-model="meal.protein">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Sugar</v-list-item-title>
                                <v-text-field solo type="number" v-model="meal.sugar">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-list>
                </v-row>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
import MacroInput from './MacroInput.vue'
import { ValidationProvider } from 'vee-validate'


export default {
    components: {
        MacroInput,
        ValidationProvider
    },
    data() {
        return {
            notifications: false,
            sound: true,
            widgets: false,
            meal:{
                name: '',
                calories: 0,
                fat: 0,
                carbohydrate: 0,
                protein: 0,
                sugar: 0,
            },
        }

    },
    computed: {
        dialog() {
            return this.$store.state.addMealDialog;
        }
    },
    methods: {
        ...mapMutations(["toggleDialog"]),

        async sendData(){
            this.meal['meal_id']=this.$store.state.addingMeal;
            this.meal['date']=this.$store.state.todaysDate;
            const sendMeal = await this.$axios.$post('http://localhost:5500/add-meal',{
                meal: this.meal,
            });           
            // this.toggleDialog();
        }
    },

}
</script>

