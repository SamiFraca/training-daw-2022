<template>
  <div id="root">
    <div class="name">Hola que tal, mi nombre es {{ name }} {{ surname }}</div>
    <div class="years">Mi edad es {{ age }}</div>
    <div> <button @click="increment">Incrementar</button><button @click="decrement">Decrementar</button></div>
   
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {
      name: "Sami",
      surname: "Fraca",
      age: 20,
    };
     },
  methods: {
        increment() {
          this.age++;
        },
        decrement() {
          this.age <= 0 ? this.age=0 : this.age--;
        }
      }

};
</script>
<style scoped>
.name{
  background: coral;
}
.years{
  background-color: lightcyan;
}
</style>
