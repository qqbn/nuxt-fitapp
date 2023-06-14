<template>
    <v-col cols="12" xl="6" lg="6" md="8" sm="8" xs="10" class="d-flex justify-center align-center">
        <v-text-field solo v-model="searchQuery"></v-text-field>
        <v-btn color="primary" class="ml-6 mb-7" @click="macroSearch()">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </v-col>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            searchQuery: '',
            searchedDish: {},
        }
    },
    methods: {
       async macroSearch() {
            const options = {
            method: 'GET',
            url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
            params: {
                query: this.searchQuery,
            },
            headers: {
                'X-RapidAPI-Key': this.$config.apiKey,
                'X-RapidAPI-Host': this.$config.apiHost, 
            }
            };

           const request = await this.$axios.request(options).then((response) => {
                this.setItems(response.data);
            }).catch((error) => {
                console.error(error);
                this.showErrorAlert(`We can't find data of this meal`);
            });
        },
        setItems(data) {
            const dish = data[0];
            this.searchedDish.name=dish.name || '';
            this.searchedDish.size=dish.serving_size_g || '';
            this.searchedDish.calories = dish.calories || 0;
            this.searchedDish.fat = dish.fat_total_g || 0;
            this.searchedDish.carbs = dish.carbohydrates_total_g || 0;
            this.searchedDish.protein = dish.protein_g || 0;
            this.searchedDish.sugar = dish.sugar_g || 0;
            this.searchedDish.sodium = dish.sodium_mg || 0;
            this.searchedDish.cholesterol = dish.cholesterol_mg || 0;
            this.searchedDish.satured = dish.fat_saturated_g || 0;
            this.searchedDish.fiber = dish.fiber_g || 0;
            this.$emit('addDish', this.searchedDish);
            this.searchedDish={};
        },

        ...mapMutations(['showErrorAlert'])
    }
}
</script>