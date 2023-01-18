<template>
  <div>
    <div v-for="(quote, index) in quotes" :key="index" v-if="index%2===0">{{quote}}</div>
    <button @click="quotes.push('hola')">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotes: [
        "Mi 286 no tiene memoria, tan sólo un vago recuerdo",
        "Fichero no encontrado. ¿Me lo invento? (S/N)",
        "Cambio Pentium por calculadora que sepa dividir",
        "Windows 98 es multitarea: Acaba con mis nervios y mi paciencia al mismo tiempo.",
        "PATH: la primera a la derecha y luego todo recto",
        "VVaayyaa tteeccllaaddoo mmaass sseennssiibbllee",
        "Mi ordenador me gana al ajedrez, pero yo le gano boxeando.",
        "Vndo un tclado qu l falta una vocal",
        "¿Qué le dijo un AVI a un BMP? ........ ¡Anímate hombre, anímate!",
        "0La blasfemia es el único lenguaje que de verdad conocen todos los programadores",
      ],
      show: true,
    };
  },
  methods: {
    pair() {
      if (this.quotes.key % 2 == 0) {
        console.log(this.quotes);
        return this.show;
      } else {
        this.show = false;
        return this.show;
      }
    },
  },
};
</script>

<style>
</style>