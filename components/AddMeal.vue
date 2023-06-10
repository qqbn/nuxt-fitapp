<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="toggleDialog()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title v-show="!editingMealId">Adding new meal</v-toolbar-title>
                    <v-toolbar-title v-show="editingMealId">Editing meal</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="validateForm">
                            Save
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-row class="pa-0 ma-0" justify="center" fullscreen>
                    <v-list max-width="600px" class="overflow-hidden">
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="primary--text">Meal name</v-list-item-title>
                                <v-text-field solo type="text" class="mt-2" v-model="meal.meal_name" :rules="rules">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="primary--text">Meal calories</v-list-item-title>
                                <v-text-field solo type="number" class="mt-2" v-model.number="meal.meal_calories">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Fat</v-list-item-title>
                                <v-text-field solo type="number" v-model.number="meal.meal_fat">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Carbohydrates</v-list-item-title>
                                <v-text-field solo type="number" v-model.number="meal.meal_carbs">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Protein</v-list-item-title>
                                <v-text-field solo type="number" v-model.number="meal.meal_protein">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content>
                                <v-list-item-title class="primary--text">Sugar</v-list-item-title>
                                <v-text-field solo type="number" v-model.number="meal.meal_sugar">
                                </v-text-field>
                            </v-list-item-content>
                        </v-list-item>
                        <v-divider></v-divider>
                    </v-list>
                </v-row>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            notifications: false,
            sound: true,
            widgets: false,
            meal:{
                meal_name: '',
                meal_calories: 0,
                meal_fat: 0,
                meal_carbs: 0,
                meal_protein: 0,
                meal_sugar: 0,
            },
            editingMealId: null,
            editingMeal: null,
            rules:[
                value => !!value || 'Required.',
                value => (value || '').length >= 3 || 'Min 3 characters',
            ]
        }

    },
    mounted(){
        window.addEventListener('editDialog', (e)=>{
            if(e.detail){
                this.meal.meal_name=e.detail.meal.meal_name;
                this.meal.meal_calories=e.detail.meal.meal_calories;
                this.meal.meal_fat=e.detail.meal.meal_fat;
                this.meal.meal_carbs=e.detail.meal.meal_carbs;
                this.meal.meal_protein=e.detail.meal.meal_protein;
                this.meal.meal_sugar=e.detail.meal.meal_sugar;
                this.editingMealId = e.detail.meal.id;
                this.editingMeal = e.detail.id;   
            }else{
                this.meal.meal_name='';
                this.meal.meal_calories=0;
                this.meal.meal_fat=0;
                this.meal.meal_carbs=0;
                this.meal.meal_protein=0;
                this.meal.meal_sugar=0;
                this.editingMealId = null; 
            }
        })
    },
    computed: {
        dialog() {
            return this.$store.state.addMealDialog;
        }
    },
    methods: {
        ...mapMutations(["toggleDialog","showAlert", "showErrorAlert"]),

        validateForm(){
            if(this.meal.meal_name && this.meal.meal_name.length>=3){
                this.sendData();
            }
        },

        async sendData(){
            if(!this.editingMealId){
                this.meal['meal_id']=this.$store.state.addingMeal;
                this.meal['date']=this.$store.state.todaysDate;
                const sendMeal = await this.$axios.$post('http://localhost:5500/add-meal',{
                    meal: this.meal,
                }).then((res)=> {
                    this.toggleDialog();
                    if(res){
                        this.showAlert('Meal has been added!');
                        this.meal['id']=res[0];
                        this.$emit('addMeal', this.meal);
                    }
                }).catch((error)=>{
                    this.toggleDialog();
                    this.showErrorAlert('There is an error with adding meal');
                });
            }else{
                const date = this.$store.state.todaysDate.toISOString().substring(0, 10);
                const sendMeal = await this.$axios.$post(`http://localhost:5500/edit-meal/${this.editingMealId}/${date}`,{
                    meal: this.meal,
                }).then((res)=>{
                    this.toggleDialog();
                    if(res){
                        this.showAlert('Meal has been edited!');
                        this.meal['editingMeal']=this.editingMeal;
                        this.meal['editingMealId']=this.editingMealId;
                        this.$emit('editMeal', this.meal);
                        this.$emit('stateRefresh', res);
                    }
                }).catch((error)=>{
                    this.toggleDialog();
                    this.showErrorAlert('There is an error with editing meal');
                })
            }          
        }
    },

}
</script>

