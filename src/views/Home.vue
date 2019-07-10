<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WeatherLocation ciudad="Mexico" temperatura="15°C" humedad="18%" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WeatherLocation from "@/components/WeatherLocation";
import axios from "axios";
export default {
  name: "home",
  components: {
    HelloWorld,
    WeatherLocation
  },
  created() {
    this.ciudades();
  },
  methods: {
    ciudades() {
      var key = "521a97605aaf878aceadfa493caa3bfb";
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=" +
            key,
          {
            method: "GET",
            mode: "no-corse",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "aplication/json"
            }
          }
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
