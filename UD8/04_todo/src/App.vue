<template>
  <div id="app">
    <InputTask @newTask="addTask"></InputTask>
    <div id="content">
      <Task
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :done="task.done"
        @mark="onMark"
      />
    </div>
    <button @click="Clear">Clear</button>
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import InputTask from "./components/InputTask"

export default {
  name: "App",
  components: {
    Task,InputTask
  },
  data() {
    return {
      taskName: "",
      tasks: [
        { id: 0, name: "Hacer los deberes", done: false },
        { id: 1, name: "Preparar exámen de asignatura :)", done: true },
      ],
    };
  },
  methods: {
    onMark(id) {
      console.log(`tarea marcada ${id}`);
      let task = this.tasks.filter((t) => t.id === id)[0];
      task.done = !task.done;
    },
    addTask(taskName) {
      this.tasks.push({
        id: this.tasks.length,
        name: taskName,
        done: false,
      });
    },
    Clear() {
      if (this.tasks.length > 0) {
        this.tasks = [];
      }
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

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
