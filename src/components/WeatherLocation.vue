<template>
  <div class="container">
    <div>
      <Location :ciudad="ciudad" />
    </div>
    <div>
      <WeatherData :humedad="humedad" :temperatura="temperatura" />
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
    ciudad: String,
    temperatura: String,
    humedad: String
  }
};
</script>
<style>
.container {
  width: 500px;
  color: rgb(13, 65, 44);
  border-radius: 59px 59px 59px 59px;
  -moz-border-radius: 59px 59px 59px 59px;
  -webkit-border-radius: 59px 59px 59px 59px;
  background: chocolate;
}
</style>
