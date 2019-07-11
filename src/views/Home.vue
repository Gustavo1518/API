<template>
  <div>
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
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
    WeatherLocation
  },
  beforeMount() {
    this.ciudades().then(response => {
      this.ciudad = response.data.ciudad;
      this.temperatura = response.data.temperatura;
    });
  },
  mounted() {
    console.log(this);
  },
  methods: {
    ciudades() {
      return axios.get("http://localhost:3000/posts/1");
    },
    ciudades1() {
      return axios.get("http://localhost:3000/posts/2");
    },
    ciudades2() {
      return axios.get("http://localhost:3000/posts/3");
    }
  }
};
</script>
