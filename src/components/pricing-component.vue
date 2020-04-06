<template>
  <div>
    <right-swirl />
    <left-swirl />

    <h1>Our Pricing</h1>
    <div class="toggle-container">
      <h4>Annual</h4>
      <toggle />
      <h4>Monthly</h4>
    </div>

    <div class="tile-container">
      <div id="tile" class="price-tile">
        Basic
        <h1>$19.99</h1>
        <div class="divider"></div>500 GB storage
        <div class="divider"></div>2 users allowed
        <div class="divider"></div>Send up to 3 GB
        <div class="divider"></div>
        <button class="button" @click="handleClick($event)">LEARN MORE</button>
      </div>

      <div id="tile" class="price-tile">
        Professional
        <h1>$24.99</h1>
        <div class="divider"></div>1 TB storage
        <div class="divider"></div>5 users allowed
        <div class="divider"></div>Send up to 10 GB
        <div class="divider"></div>
        <button class="button" @click="handleClick($event)">LEARN MORE</button>
      </div>

      <div id="tile" class="price-tile">
        Master
        <h1>$39.99</h1>
        <div class="divider"></div>2 TB storage
        <div class="divider"></div>10 users allowed
        <div class="divider"></div>Send up to 20 GB
        <div class="divider"></div>
        <button class="button" @click="handleClick($event)">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import RightSwirl from "../images/right-swirl.vue";
import LeftSwirl from "../images/left-swirl.vue";
import Toggle from "./toggle.vue";

export default {
  name: "PricingComponent",
  components: {
    RightSwirl,
    LeftSwirl,
    Toggle
  },
  methods: {
    handleClick(event) {
      let evt = event.target.parentElement.className;
      let tile = document.querySelectorAll(".price-tile");
      let btn = document.querySelectorAll(".button");

      for (let i = 0; i < tile.length; i++) {
        for (let j = 0; j < btn.length; j++) {
          btn[j].classList.remove("active");
        }
        tile[i].classList.remove("active");
      }

      if (evt !== "price-tile active") {
        event.target.parentElement.classList.add("active");
        event.target.classList.add("active");
      }
    }
  }
};
</script>
