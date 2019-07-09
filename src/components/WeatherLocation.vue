<template>
  <div class="container">
    <div>
      <Location :ciudad="ciudad" />
    </div>
    <div>
      <WeatherData />
    </div>
  </div>
</template>
<script>
import Location from "@/components/Location";
import WeatherData from "@/components/WeatherData";

export default {
  name: "WeatherLocation",
  components: {
    Location,
    WeatherData
  },
  props: {
    ciudad: String
  }
};
</script>
<style>
.container {
  border: solid 1px orange;
  width: 300px;
}
</style>
