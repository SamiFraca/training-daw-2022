<template>
  <div>
    <div style="display:flex; justify-content:center;">
      <div style="display:flex; flex-direction:column;">
        <form>
          <input type="text" name="Nombre" value="nombre del producto" />
          <br />
          <input type="text" name="Precio" value="Precio" />
        </form>
        <textarea name id cols="1" rows="5" v-if="show">Descripcion</textarea>
      </div>
      <button @click="showDescription" style="width:4rem;height:2.8rem">Ver</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box",
  data() {
    return {
      show: true,
      description:'Amet eum expedita voluipattes'
    };
  },
  methods: {
    showDescription() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    clickToShow() {
      this.showDescription();
    },
  },
};
</script>

<style>
</style>