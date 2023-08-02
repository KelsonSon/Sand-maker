import { createStore } from 'vuex'

export default createStore({
  state: {
    sanduiches: []
  },
  getters: {
  },
  mutations: {
    addSanduiche(state, sanduiche) {
      state.sanduiches.push(sanduiche);
      
    }
  },
  actions: {
  },
  modules: {
  }
})
