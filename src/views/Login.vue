<template>
  <div>
    <right-swirl />
    <left-swirl />

    <h1 class="login">
      <b>Login</b> to view
      <br />your pricing options:
    </h1>

    <form>
      <div>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          @blur="handleInvalid('email')"
          :class="emailError === null ? '' : emailError ? 'error' : 'good'"
        />
        <p>
          <i>Eg. test@test.com</i>
        </p>
        <span class="email-invalid" v-if="emailError">Must be a valid email</span>
      </div>
      <div>
        <input
          required
          type="number"
          id="number"
          name="number"
          placeholder="Mobile Number"
          @blur="handleInvalid('number')"
          :class="numberError === null ? '' : numberError ? 'error' : 'good'"
        />
        <p>
          <i>Eg. 07777777777</i>
        </p>
        <span class="number-invalid" v-if="numberError">Must be a valid number</span>
      </div>
      <input class="submit" value="LOGIN" @click="handleLogin" />
    </form>
  </div>
</template>

<script>
import RightSwirl from "../images/right-swirl.vue";
import LeftSwirl from "../images/left-swirl.vue";

export default {
  components: {
    RightSwirl,
    LeftSwirl
  },
  data() {
    return {
      emailError: null,
      numberError: null
    };
  },
  methods: {
    validEmail(email) {
      let regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return regex.test(email);
    },
    validNumber(number) {
      let regex = /^(?:(?:00)?44|0)7(?:[45789]\d{2}|624)\d{6}$/;
      return regex.test(number);
    },
    handleInvalid(name) {
      if (name === "email") {
        if (!this.validEmail(event.target.value)) {
          this.emailError = true;
        } else {
          this.emailError = false;
        }
      }
      if (name === "number") {
        if (!this.validNumber(event.target.value)) {
          this.numberError = true;
        } else {
          this.numberError = false;
        }
      }
    },
    handleLogin() {
      let email = event.target.parentElement[0];
      let number = event.target.parentElement[1];

      if (email.value === "") {
        this.emailError = true;
      }
      if (number.value === "") {
        this.numberError = true;
      }
      if (this.emailError || this.numberError) {
        return "";
      } else {
        this.$router.push({ path: "/pricing" });
      }
    }
  }
};
</script>
