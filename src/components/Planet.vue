<template>
  <div class="planet" v-on:click="selectPlanet($vnode.key)">
    <i class="fas fa-globe-africa fa-8x" :class="{selected: isSelected}"></i>
    <div class="planet-info">
      <h1>{{ planet.name }}</h1>
      <h4>Distance: {{ planet.distance }} au</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Planet",
  props: { planet: { name: String, distance: Number } },
  methods: mapMutations(["selectPlanet"]),
  computed: {
    ...mapState(["selectedPlanet"]),

    isSelected() {
      return this.$vnode.key == this.selectedPlanet;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: darkgrey;
}

.selected {
  color: #89c0b7;
}

.planet {
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #ccc;
}

.planet:hover {
  box-shadow: 1px 1px 3px 4px rgb(155, 154, 154);
}

.planet-info {
  margin-top: 8%;
}

.planet-info > * {
  margin: 0%;
}
</style>
