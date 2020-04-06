<template>
  <div id="app">
    <pricing-component />
  </div>
</template>

<script>
import PricingComponent from "./components/pricing-component.vue";

export default {
  name: "App",
  components: {
    PricingComponent
  }
};
</script>
<style lang="scss">
@import "./SCSS_variables/styles.scss";
</style>