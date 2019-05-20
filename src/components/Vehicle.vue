<template>
  <div
    class="vehicle"
    :class="{active: isActive, selected: isSelected}"
    v-on:click="isActive && selectVehicle($vnode.key)"
  >
    <i class="fas fa-space-shuttle fa-4x"/>
    <div class="vehicle-info">
      <h4>{{ vehicle.name }} ({{ vehicle.total_no }})</h4>
      <h6>Speed: {{ vehicle.speed }} au/h</h6>
      <h6>Max distance: {{ vehicle.max_distance }} au</h6>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Vehicle",
  props: {
    vehicle: {
      name: String,
      total_no: Number,
      max_distance: Number,
      speed: Number
    }
  },
  methods: mapActions(["selectVehicle"]),
  computed: {
    ...mapState(["selectedPlanet", "squad"]),

    isActive() {
      return this.vehicle.total_no > 0;
    },

    isSelected() {
      return this.squad[this.selectedPlanet] == this.$vnode.key;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vehicle {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
}

.active {
  box-shadow: 1px 1px 1px 1px #ccc;
}

.selected {
  color: #89c0b7;
}

.selected,
.active:hover {
  box-shadow: 1px 1px 3px 4px rgb(155, 154, 154);
}

.vehicle-info > * {
  margin: 0%;
}
</style>
