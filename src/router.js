import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import WeatherTemperature from "./components/WeatherTemperature";
import WeatherExtraInfo from "./components/WeatherExtraInfo";
import WeatherData from "./components/WeatherData";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/WeatherTemperature",
      name: "WeatherTemperature",
      component: WeatherTemperature
    },
    {
      path: "/WeatherExtraInfo",
      name: "WeatherExtraInfo",
      component: WeatherExtraInfo
    },
    {
      path: "/WeatherData",
      name: "WeatherData",
      component: WeatherData
    }
  ]
});
