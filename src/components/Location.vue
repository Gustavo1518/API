<template>
  <div class="location">
    <h1>{{ ciudad }}</h1>
  </div>
</template>
<script>
export default {
  name: "Location",
  props: {
    ciudad: String
  }
};
</script>
<style>
.location {
  text-align: center;
}
</style>
