<template>
  <div class="container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username must contain letters only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-firstName"
        label-cols-sm="3"
        label="First Name:"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          v-model="$v.form.firstName.$model"
          type="text"
          :state="validateState('firstName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">
          First Name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.firstName.alpha">
          First Name must contain letters only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-lastName"
        label-cols-sm="3"
        label="Last Name:"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          v-model="$v.form.lastName.$model"
          type="text"
          :state="validateState('lastName')"

        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">
          Last Name is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.lastName.alpha">
          Last Name must contain letters only
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
         <strong> Your password should be strong. <br />
          For that, your password should be also:</strong>
        </b-form-text>
          <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >must be between 5-10 characters long</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.ContainsNumber"
        >must contains at least 1 numeric character</b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.ContainsSpecialChar"
        >must contains at least one special character</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="Email:"
        label-for="email"
         >
        <b-form-input
          id="email"
          v-model="$v.form.email.$model"
          type="text"
          :state="validateState('email')"     

        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">
          email is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.email.email"
        >
          Please enter correct email
        </b-form-invalid-feedback>
      </b-form-group>


      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Register</b-button
      >
      <div class="mt-2">
        You have an account already?
        <router-link to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import countries from "../assets/countries";

const ContainsNumber = (value) => {
  const oneNumericChar = new RegExp("(?=.*[0-9])");
  return oneNumericChar.test(value);
};
const ContainsSpecialChar = (value) => {
  const oneSpecialChar = new RegExp("(?=.*[!@#$%^&*])");
  return oneSpecialChar.test(value);
};

import {
  required,
  minLength,
  maxLength,
  alpha,
  email
} from "vuelidate/lib/validators";

export default {
  name: "RegisterUser",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        submitError: undefined
      },
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstName: {
        required,
        alpha
      },
      lastName: {
        required,
        alpha
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        ContainsNumber,
        ContainsSpecialChar
      },
      email: {
        required,
        email
      },
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        // const response = await this.axios.post(
        //   "http://localhost:3003/Register",
        //   {
        //     username: this.form.username,
        //     firstname: this.form.firstName,
        //     lastname: this.form.lastName,
        //     country: this.form.country,
        //     password: this.form.password,
        //     email: this.form.email,
        //     imageurl: this.form.imageUrl
        //   }
        // );
        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        imageUrl: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
    align-items: right;
    border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:rgb(6, 51, 29);
  background-color: #e6e6e6;
}
</style>
