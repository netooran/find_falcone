<template>
  <div class="vehicle-picker">
    <div class="vehicles">
      <Vehicle v-for="(vehicle, index) in vehicles" :vehicle="vehicle" :key="index"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vehicle from "@/components/Vehicle.vue";

export default {
  name: "VehiclePicker",
  components: { Vehicle },
  computed: mapState(["vehicles"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vehicles {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 4vw 8% 2vw 8%;
}
</style>
