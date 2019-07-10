<template>
  <div>
    <HelloWorld msg="API con vue.js" />
    <WeatherLocation
      :ciudad="ciudad"
      :temperatura="temperatura + '°C'"
      :humedad="humedad + '%'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WeatherLocation from "@/components/WeatherLocation";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      ciudad: "Mexico",
      temperatura: "17",
      humedad: "12"
    };
  },
  components: {
    HelloWorld,
    WeatherLocation
  },
  beforeMount() {
    this.ciudades();
  },
  mounted() {
    console.log(this);
  },
  methods: {
    ciudades() {
      axios
        .get("http://localhost:3000/posts/1")
        .then(function(response) {
          console.log(response);
          this.ciudad = response.ciudad;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
