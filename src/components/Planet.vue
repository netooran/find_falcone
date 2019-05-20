<template>
  <div
    class="planet"
    :class="{active: isActive, squad : inSquad}"
    v-on:click="isActive && selectPlanet($vnode.key)"
  >
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
    ...mapState(["selectedPlanet", "squad"]),

    isActive() {
      return !(
        Object.keys(this.squad).length == 4 && !this.squad[this.$vnode.key]
      );
    },

    isSelected() {
      return this.$vnode.key == this.selectedPlanet;
    },

    inSquad() {
      return this.squad[this.$vnode.key];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  color: darkgrey;
}

.planet {
  padding: 30px;
  border-radius: 10px;
}

.selected {
  color: #89c0b7;
}

.active {
  box-shadow: 1px 1px 1px 1px #ccc;
}

.selected {
  color: #89c0b7;
}

.squad,
.active:hover {
  box-shadow: 1px 1px 3px 4px rgb(155, 154, 154);
}

.planet-info {
  margin-top: 8%;
}

.planet-info > * {
  margin: 0%;
}
</style>
