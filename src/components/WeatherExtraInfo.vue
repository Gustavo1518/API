<template>
  <div>
    <div>porcentaje %</div>
    <div>velocidad m/s</div>
    {{ humedad }}
  </div>
</template>
<script>
export default {
  name: "WeatherExtraInfo",
  props: {
    humedad: String
  }
};
</script>
