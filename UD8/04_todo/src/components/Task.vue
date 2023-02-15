<template>
  <div>
    <div v-if="done">
      <input type="checkbox" checked @click="cambiarEstado" />
      <span class="done">{{name}}</span>
    </div>
    <div v-if="!done">
      <input type="checkbox" @click="cambiarEstado" />
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
    done: Boolean,
  },
  methods: {
    cambiarEstado() {
      console.log("quiero cambiar el estado de " + this.id);
      this.$emit("mark", this.id);
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: grey;
}
</style>
