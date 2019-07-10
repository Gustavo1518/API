<template>
  <div>
    <div><v-icon name="umbrella"></v-icon></div>
    {{ temperatura }}
  </div>
</template>
<script>
export default {
  name: "WeatherTemperature",
  props: {
    temperatura: String
  }
};
</script>
