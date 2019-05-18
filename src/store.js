import Vue from "vue";
import Vuex from "vuex";
import station from "@/api/baseStation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { planets: [], vehicles: [], selectedPlanet: undefined, errors: [] },

  mutations: {
    addPlanets(state, planets) {
      state.planets = planets;
    },

    selectPlanet(state, planetId) {
      state.selectedPlanet = planetId;
    },

    addVehicles(state, vehicles) {
      state.vehicles = vehicles;
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
    },

    getVehicles({ commit }) {
      station.getVehicles(
        vehicles => commit("addVehicles", vehicles),
        errors => commit("addErrors", errors)
      );
    }
  }
});
