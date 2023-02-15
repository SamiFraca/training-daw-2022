<template>
  <div>
    <input type="text" v-model="taskName" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    addTask() {
      if (this.taskName.trim() !== "") {
        this.$emit("newTask", this.taskName);
        this.taskName = "";
      }
    },
  },
};
</script>

<style>
</style>