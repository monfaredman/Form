<template>
  <v-app id="inspire" class="w-1/2 m-auto">
    <v-form ref="form" v-model="valid" lazy-validation class="formTotal">
      <div class="headline font-weight-bold mb-4">Register Form</div>

      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="Lname"
        :counter="10"
        :rules="LnameRules"
        label="LastName"
        required
      ></v-text-field>

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
        @click="validate, RegisterUser()"
      >
        ثبت نام
      </v-btn>

      <v-btn
        color="primary"
        class="mr-4 mt-3 font-black text-2xl btnForm"
        to="/login"
      >
        ورود
      </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    Lname: "",
    LnameRules: [
      (v) => !!v || "LastName is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
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
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    RegisterUser() {
      const RegisterData = {
        email: this.email,
        password: this.password,
        name: this.name,
        LastName: this.Lname,
      };
      this.$store.dispatch("RegisterUser", RegisterData);
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
}
.btnForm {
  font-size: 15px;
  font-weight: 900;
}
</style>
