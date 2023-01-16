<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Title></Title>
    <HelloWorld msg="2323" :counter="1"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Title from './components/title.vue'
export default {
  name: 'App',
  components: {
    HelloWorld, Title
  },
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
