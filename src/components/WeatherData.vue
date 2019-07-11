<template>
  <div class="dataContainer">
    <div class="row">
      <div class="column">
        <WeatherTemperature :temperatura="temperatura" />
        
      </div>
      <div class="column">
        <WeatherExtraInfo :humedad="humedad" />
      </div>
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
  border: solid 1px rgb(42, 85, 141);
  background: rgb(172, 223, 238);
}
.row {
  border: solid 1px rgba(255, 255, 255, 0.918);
  width: 280px;
}
.dataContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
