<template>
  <v-app id="inspire" class="w-1/2 m-auto" :class="{ backGray: boleanColor() }">
    <v-form ref="form" v-model="valid" lazy-validation class="formTotal">
      <div class="headline font-weight-bold mb-4">Login Form</div>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        label="Password"
        :rules="passwordRules"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4 mt-3 font-black text-2xl btnForm"
        @click="SignInUser()"
      >
        ورود
      </v-btn>

      <v-btn
        color="primary"
        class="mr-4 mt-3 font-black text-2xl btnForm"
        to="/"
      >
        ثبت نام
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must have 5+ characters",
    ],
  }),
  mounted() {
    this.validate();
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    SignInUser() {
      const SignInUserData = {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      };
      this.$store.dispatch("SignInUser", SignInUserData);
    },

    boleanColor() {
      return this.$store.state.backColor;
    },
  },
};
</script>

<style lang="scss">
.formTotal {
  width: 40%;
  margin: auto;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 50px;
  margin: 52px auto;
}
.btnForm {
  font-size: 15px;
  font-weight: 900;
}
.backGray {
  background-color: #5d080825 !important;
}
</style>
