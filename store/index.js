import { getField, updateField } from 'vuex-map-fields';
export const state = () => ({
  addMealDialog: false,
  todaysDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000),
  dailyLimits: {
    calories: 0,
    fat: 0,
    sugar: 0,
    carbs: 0,
    protein: 0,
  },
  addingMeal: 0
});

export const mutations = {
  updateField,
  toggleDialog(state, val) {
    state.addMealDialog = !state.addMealDialog;
    state.addingMeal=val;
    console.log(val);
  },

  pickDate(state, newDate) {
    state.todaysDate = new Date(newDate);
  },

  addDay(state, val) {
    state.todaysDate.setDate(state.todaysDate.getDate() + val);
    this.commit("pickDate", state.todaysDate);
  },

};

export const getters = {
  getField
}

export const actions = {
  setSettings() {
    alert("how u doin?");
  },
};
