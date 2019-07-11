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
  border: solid 1px rgb(141, 42, 42);
  background: rgb(223, 215, 214);
}
.row {
  border: solid 1px black;
  width: 280px;
}
.dataContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
