import Vue from "vue";
import Vuex from "vuex";
import station from "./api/baseStation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { planets: [], errors: [] },

  mutations: {
    addPlanets(state, planets) {
      state.planets = planets;
    },
    addErrors(state, errors) {
      state.errors.push(errors);
    }
  },

  actions: {
    getPlanets({ commit }) {
      station.getPlanets(
        planets => commit("addPlanets", planets),
        errors => commit("addErrors", errors)
      );
    }
  }
});
