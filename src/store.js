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
    falcone: undefined,
    errors: []
  },

  getters: {
    isLaunchReady(state) {
      return Object.keys(state.squad).length == 4;
    },

    isGameOver(state) {
      return state.falcone;
    },

    missionResponse(state) {
      return state.falcone && state.falcone.status == "success"
        ? `Great job Squad, We've found Falcone from ${state.falcone.planet}.`
        : "Better luck next time Squad. Keep up the spirit.";
    }
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

      Vue.set(
        state.vehicles,
        index,
        Object.assign({}, vehicle, { total_no: vehicle.total_no + 1 })
      );
    },

    decrementCount(state, vehicleName) {
      let index = state.vehicles.findIndex(v => v.name == vehicleName);
      let vehicle = state.vehicles[index];

      Vue.set(
        state.vehicles,
        index,
        Object.assign({}, vehicle, { total_no: vehicle.total_no - 1 })
      );
    },

    addToSquad(state, [planetName, vehicleName]) {
      Vue.set(state.squad, planetName, vehicleName);
    },

    onFalconeFound(state, planetName) {
      state.falcone = { found: true, planet: planetName };
    },

    onFalconeFleed(state) {
      state.falcone = { found: false, planet: undefined };
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

    findFalcone({ state, commit }) {
      station
        .getToken()
        .then(({ token }) => {
          station.findFalcone({
            token,
            planets: Object.keys(state.squad),
            vehicles: Object.values(state.squad)
          });
        })
        .then(result => {
          (result.status == "success" &&
            commit("onFalconeFound", result.planet)) ||
            commit("onFalconeFleed");
        })
        .catch(errors => commit("addErrors", errors));
    },

    selectVehicle({ state, commit }, vehicleName) {
      let oldVehicleName = state.squad[state.selectedPlanet];
      oldVehicleName && commit("incrementCount", oldVehicleName);

      commit("addToSquad", [state.selectedPlanet, vehicleName]);

      commit("decrementCount", vehicleName);
    }
  }
});
