<template>
  <div class="Location">
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
