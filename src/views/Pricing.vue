<template>
  <div>
    <right-swirl />
    <left-swirl />

    <h1>Our Pricing</h1>
    <div class="toggle-container">
      <h4>Annual</h4>
      <toggle @checked="handleCheckbox" />
      <h4>Monthly</h4>
    </div>

    <div class="tile-container">
      <div class="price-tile">
        Basic
        <h1>${{ monthlyActive ? basicMonthly : 12 * Number(basicMonthly) }}</h1>
        <hr />
        500 GB storage
        <hr />
        2 users allowed
        <hr />
        Send up to 3 GB
        <hr />
        <button class="button" @click="handleClick">LEARN MORE</button>
      </div>

      <div class="price-tile">
        Professional
        <h1>${{ monthlyActive ? profMonthly : 12 * Number(profMonthly) }}</h1>
        <hr />
        1 TB storage
        <hr />
        5 users allowed
        <hr />
        Send up to 10 GB
        <hr />
        <button class="button" @click="handleClick">LEARN MORE</button>
      </div>

      <div class="price-tile">
        Master
        <h1>${{ monthlyActive ? masterMonthly : 12 * Number(masterMonthly) }}</h1>
        <hr />
        2 TB storage
        <hr />
        10 users allowed
        <hr />
        Send up to 20 GB
        <hr />
        <button class="button" @click="handleClick">LEARN MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import RightSwirl from '../images/right-swirl.vue';
import LeftSwirl from '../images/left-swirl.vue';
import Toggle from '../components/toggle.vue';

export default {
  components: {
    RightSwirl,
    LeftSwirl,
    Toggle,
  },
  data() {
    return {
      monthlyActive: false,
      basicMonthly: '19.99',
      profMonthly: '24.99',
      masterMonthly: '39.99',
    };
  },
  methods: {
    handleCheckbox(value) {
      this.monthlyActive = value;
    },
    handleClick() {
      let evt = event.target.parentElement;
      let tile = document.querySelectorAll('.price-tile');

      tile.forEach((el) => {
        if (el.classList.value === 'price-tile active') {
          el.classList.remove('active');
        }
      });

      if (evt.className !== 'price-tile active') {
        evt.classList.add('active');
      }
    },
  },
};
</script>
