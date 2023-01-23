<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Number/>
  </div>
</template>

<script>
import Number from './components/Number.vue'

export default {
  name: 'App',
  components: {
    Number
  }
}
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
