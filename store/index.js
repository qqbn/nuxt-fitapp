export const state = () => ({
  addMealDialog: false,
});

export const mutations = {
  toggleDialog(state) {
    state.addMealDialog = !state.addMealDialog;
  },
};
