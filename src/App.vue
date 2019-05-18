<template>
  <div id="app">
    <HelloWorld :msg="appName"/>
    <PlanetPicker v-if="planets && planets.length"/>
    <VehiclePicker v-if="vehicles && vehicles.length && selectedPlanet >= 0"/>
    <i v-if="errors && errors.length" class="fab fa-grav">{{ errorMsg }}</i>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

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
  computed: mapState(["planets", "vehicles", "selectedPlanet", "errors"]),
  methods: mapActions(["getPlanets", "getVehicles"]),

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
</style>
