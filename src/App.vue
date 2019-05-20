<template>
  <div id="app">
    <HelloWorld :msg="appName"/>
    <i v-if="errors && errors.length" class="fab fa-grav centered">{{ errorMsg }}</i>
    <h3 v-else-if="isGameOver">{{ missionResponse }}</h3>
    <div v-else>
      <PlanetPicker v-if="planets && planets.length"/>
      <VehiclePicker v-if="vehicles && vehicles.length && selectedPlanet"/>
      <button v-if="isLaunchReady" v-on:click="findFalcone">Find Falcone</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import HelloWorld from "./components/HelloWorld.vue";
import PlanetPicker from "./components/PlanetPicker.vue";
import VehiclePicker from "./components/VehiclePicker.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    PlanetPicker,
    VehiclePicker
  },
  computed: {
    ...mapGetters(["isLaunchReady", "isGameOver", "missionResponse"]),
    ...mapState(["planets", "vehicles", "selectedPlanet", "errors"])
  },
  methods: mapActions(["getPlanets", "getVehicles", "findFalcone"]),

  data() {
    return {
      appName: "Finding Falcone!",
      errorMsg: " Unfortunately our ravens did not come back. Try again later."
    };
  },

  created() {
    this.getPlanets();
    this.getVehicles();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  border-radius: 10px;
  padding: 12px 32px;
  font-size: 32px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-style: italic;
  font-weight: 600;
  color: #2c3e50;
  box-shadow: 1px 1px 1px 1px #ccc;
}

button:hover {
  background-color: #4caf50;
  color: white;
  box-shadow: 1px 1px 3px 4px #ccc;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
