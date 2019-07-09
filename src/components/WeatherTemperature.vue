<template>
  <div>
    <div><v-icon name="umbrella"></v-icon></div>
    <div>12° C</div>
  </div>
</template>
<script>
export default {
  name: "WeatherTemperature",
  props: {
    msg: String
  }
};
</script>
