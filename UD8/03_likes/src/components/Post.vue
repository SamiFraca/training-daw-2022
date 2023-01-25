<template>
  <div>
    <div>{{title}},{{author}},{{content}},{{key}}</div>
    <button @click="doLike(true)">Like</button>
    <button @click="doLike(false)">Dislike</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    content: String,
    key: Number,
  },
  data() {
    return { titlepost: this.title, like:false};
  },
  methods: {
    doLike(like) {
      this.$emit('like',like, this.titlepost)
    },
  },
};
</script>

<style>
</style>