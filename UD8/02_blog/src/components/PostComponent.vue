<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{author}}</h1>
    <h1>{{component}}</h1>
    <h1>{{content}}</h1>
    <button @click="doLike">Like</button>
    --------------------------------------------------------
  </div>
</template>

<script>
export default {
  props: ["id", "title", "author", "content"],
  methods:{
    doLike(){
        console.log(`POST /  ${this.id} /Like`)
    }
  }
};
</script>

<style>
</style>