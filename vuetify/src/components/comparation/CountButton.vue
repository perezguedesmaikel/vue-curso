<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'blue'
  },
  text: {
    type: String,
    default: 'No llega'
  },
  customFunction: {
    type: Function as () => void, // Utiliza el tipo 'Function' para una función sin argumentos y sin valor de retorno
    default: () => alert('prueba!!!') // Define una función vacía como valor por defecto
  }
});
</script>

<template>
  <v-btn class="ml-2"  variant="elevated" :color="color" @click="customFunction">
    {{text}}
  </v-btn>
</template>

<style scoped>

</style>
