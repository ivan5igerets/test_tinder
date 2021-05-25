export default {
  namespaced: true,
  state: {
    med_1: 0,
    med_2: 0,
    med_3: 0,
  },
  mutations: {
    INCRIMENT(state, med) {
      switch(med) {
        case 1:
          state.med_1++
          break
        case 2:
          state.med_2++
          break
        case 3:
          state.med_3++
          break
      }
    },

    ON_START(state) {
      state.med_1 = 0
      state.med_2 = 0
      state.med_3 = 0
    }
  },
  actions: {
  },
}