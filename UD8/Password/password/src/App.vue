<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Password
      :minLength="5"
      :maxLength="20"
      :containsNumbers="true"
      @validPassword="isValid"
    />
  </div>
</template>

<script>
import Password from "./components/Password.vue";

export default {
  name: "App",
  components: {
    Password,
  },
  methods: {
    isValid() {
      console.log(Password + "is valid");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
