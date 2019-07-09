<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WeatherLocation ciudad="Mexico" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WeatherLocation from "@/components/WeatherLocation";

export default {
  name: "home",
  components: {
    HelloWorld,
    WeatherLocation
  }
};
</script>
