<template>
  <div>
    <right-swirl />
    <left-swirl />

    <div class="login-container">
      <h1><b>Login</b> to view <br />your pricing options:</h1>

      <form>
        <div>
          <input required type="text" id="email" name="email" placeholder="Email Address" @blur="handleInvalid" />
          <p><i>Eg. test@test.com</i></p>
          <span class="email-invalid" style="display:none">Must be a valid email</span>
        </div>
        <div>
          <input required type="number" id="number" name="number" placeholder="Mobile Number" @blur="handleInvalid" />
          <p><i>Eg. 07777777777</i></p>
          <span class="number-invalid" style="display:none">Must be a valid number</span>
        </div>
        <input class="submit" value="LOGIN" @click="handleLogin" />
      </form>
    </div>
  </div>
</template>

<script>
import RightSwirl from '../images/right-swirl.vue';
import LeftSwirl from '../images/left-swirl.vue';

export default {
  components: {
    RightSwirl,
    LeftSwirl,
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
    handleInvalid() {
      let email = document.getElementById('email');
      let number = document.getElementById('number');

      if (event.target.name === 'email') {
        let invalidEmail = document.querySelector('.email-invalid');
        if (!this.validEmail(event.target.value)) {
          if (invalidEmail) {
            invalidEmail.style.display = 'block';
            email.style.border = '1px solid #ff7f7f';
            return false;
          }
        } else {
          email.style.border = '1px solid green';
          invalidEmail.style.display = 'none';
        }
      }
      if (event.target.name === 'number') {
        let invalidNumber = document.querySelector('.number-invalid');
        if (!this.validNumber(event.target.value)) {
          if (invalidNumber) {
            invalidNumber.style.display = 'block';
            number.style.border = '1px solid #ff7f7f';
            return false;
          }
        } else {
          number.style.border = '1px solid green';
          invalidNumber.style.display = 'none';
        }
      }
    },
    handleLogin() {
      let email = event.target.parentElement[0];
      let number = event.target.parentElement[1];
      let invalidEmail = document.querySelector('.email-invalid');
      let invalidNumber = document.querySelector('.number-invalid');

      if (
        email.value.length < 1 ||
        invalidEmail.style.display === 'block' ||
        number.value.length < 1 ||
        invalidNumber.style.display === 'block'
      ) {
        if (email.value.length < 1) {
          invalidEmail.style.display = 'block';
        }
        if (number.value.length < 1) {
          invalidNumber.style.display = 'block';
        }
        return false;
      } else {
        this.$router.push({ path: '/pricing' });
      }
    },
  },
};
</script>
