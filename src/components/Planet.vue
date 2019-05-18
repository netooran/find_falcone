<template>
  <div class="planet">
    <i class="fas fa-globe-africa fa-8x"></i>
    <div class="planet-info">
      <h1>{{ planet.name }}</h1>
      <h4>Distance: {{ planet.distance }} au</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Planet",
  props: {
    planet: { name: String, distance: Number }
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
  box-shadow: 1px 1px 1px 1px #ccc;
}

.planet-info {
  margin-top: 8%;
}

.planet-info > * {
  margin: 0%;
}

.planet:hover {
  box-shadow: 1px 1px 3px 4px rgb(155, 154, 154);
}
</style>
