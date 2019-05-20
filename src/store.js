import Vue from "vue";
import Vuex from "vuex";
import station from "@/api/baseStation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    planets: [],
    vehicles: [],
    selectedPlanet: undefined,
    squad: {},
    errors: []
  },

  mutations: {
    addPlanets(state, planets) {
      state.planets = planets;
    },

    addVehicles(state, vehicles) {
      state.vehicles = vehicles;
    },

    addErrors(state, errors) {
      state.errors.push(errors);
    },

    selectPlanet(state, planetName) {
      state.selectedPlanet = planetName;
    },

    incrementCount(state, vehicleName) {
      let index = state.vehicles.findIndex(v => v.name == vehicleName);
      let vehicle = state.vehicles[index];
      console.log("incrementCount", vehicleName, index, vehicle.name);
      Vue.set(
        state.vehicles,
        index,
        Object.assign({}, vehicle, { total_no: vehicle.total_no + 1 })
      );
    },

    decrementCount(state, vehicleName) {
      let index = state.vehicles.findIndex(v => v.name == vehicleName);
      let vehicle = state.vehicles[index];
      console.log("decrementCount", vehicleName, index, vehicle.name);
      Vue.set(
        state.vehicles,
        index,
        Object.assign({}, vehicle, { total_no: vehicle.total_no - 1 })
      );
    },

    addToSquad(state, [planetName, vehicleName]) {
      console.log("addToSquad = ", planetName, vehicleName);
      Vue.set(state.squad, planetName, vehicleName);
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
    },

    selectVehicle({ state, commit }, vehicleName) {
      let oldVehicleName = state.squad[state.selectedPlanet];
      oldVehicleName && commit("incrementCount", oldVehicleName);

      console.log(oldVehicleName);
      commit("addToSquad", [state.selectedPlanet, vehicleName]);

      commit("decrementCount", vehicleName);
    }
  }
});
