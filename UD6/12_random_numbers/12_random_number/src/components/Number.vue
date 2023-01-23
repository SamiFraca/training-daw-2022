<template>
  <div>
    <div>{{numbers}}</div>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    add() {
      this.numbers.push(Math.floor(Math.random() * 101));
    },
    remove() {
      if (this.numbers.length > 0) {
        this.numbers.shift();
      }
    },
  },
};
</script>

<style>
</style>