<template>
  <div>
    <input type="password" v-model="password" v-if="validPassword" />
    <div>{{maxLength}}, {{minLength}},{{containsNumbers}},{{containsSpecialCharacters}}</div>
    <button @click="validPassword">Enviar</button>
  </div>
</template>

<script>
export default {
  props: {
    maxLength: Number,
    minLength: Number,
    containsNumbers: Boolean,
  },
  data() {
    return { password: "" };
  },
  methods: {
    validPassword() {
      if (
        this.password.length < this.maxLength &&
        this.password.length > this.minLength
      ) {
        console.log("hola");
        this.$emit("validPassword")
      }
    },
  },
};
</script>

<style>
</style>