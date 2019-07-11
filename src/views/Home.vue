<template>
  <div>
    <WeatherLocation
      :ciudad="this.ciudad"
      :temperatura="temperatura + ''"
      :humedad="this.humedad + '%'"
    />
    <br />    
    <div v-for="todo in this.todos" :key="todo.id">
      {{ todo.id }}
      <WeatherLocation
        :ciudad="todo.ciudad"
        :temperatura="todo.temperatura + ''"
        :humedad="todo.humedad + '%'"
      />
    </div>
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
      humedad: "12",
      todos: null
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
    this.getTodos().then(response => {
      console.log("RESPONSE");
      console.log(response);
      this.todos = response.data;
    });
  },
  mounted() {
    console.log(this);
  },
  methods: {
    ciudades() {
      return axios.get("http://localhost:3000/posts/1");
    },
    getTodos() {
      return axios.get("http://localhost:3000/posts");
    }
  }
};
</script>
