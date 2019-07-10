<template>
  <div class="row">
    <div class="column">
      <WeatherTemperature :temperatura="temperatura" />
    </div>
    <div class="column">
      <WeatherExtraInfo :humedad="humedad" />
    </div>
  </div>
</template>
<script>
import WeatherTemperature from "@/components/WeatherTemperature";
import WeatherExtraInfo from "@/components/WeatherExtraInfo";

export default {
  name: "WeatherData",
  components: {
    WeatherTemperature,
    WeatherExtraInfo
  },
  props: {
    temperatura: String,
    humedad: String
  }
};
</script>
<style>
.column {
  display: table-cell;
  width: 45%;
  border: solid 1px red;
}
.row {
  border: solid 1px blue;
}
</style>
