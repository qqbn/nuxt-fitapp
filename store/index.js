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
  calories: 0,
  fat: 0,
  sugar: 0,
  carbs: 0,
  protein: 0,
});

export const mutations = {
  toggleDialog(state) {
    state.addMealDialog = !state.addMealDialog;
  },

  pickDate(state, newDate) {
    state.todaysDate = new Date(newDate);
  },

  addDay(state, val) {
    state.todaysDate.setDate(state.todaysDate.getDate() + val);
    this.commit("pickDate", state.todaysDate);
  },

  setCalories(state, val) {
    state.calories = val;
  },

  setFat(state, val) {
    state.fat = val;
  },

  setSugar(state, val) {
    state.sugar = val;
  },

  setCarbs(state, val) {
    state.carbs = val;
  },

  setProtein(state, val) {
    state.protein = val;
  },
};

export const actions = {
  setSettings() {
    alert("how u doin?");
  },
};
