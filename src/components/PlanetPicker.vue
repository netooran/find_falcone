<template>
  <div class="planet-picker">
    <div class="planets">
      <Planet v-for="(planet, index) in planets" :planet="planet" :key="index"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Planet from "@/components/Planet.vue";

export default {
  name: "PlanetPicker",
  components: { Planet },
  computed: mapState(["planets"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.planets {
  display: flex;
  justify-content: space-around;
  overflow-x: scroll;
  padding: 10px;
  margin: 4vw 8% 2vw 8%;
}

.planets > * {
  margin: 5px;
}
</style>
