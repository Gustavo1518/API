<template>
  <div>
    <div class="">
      <WeatherTemperature />
    </div>
    <div>
      <WeatherExtraInfo />
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
    msg: String
  }
};
</script>
