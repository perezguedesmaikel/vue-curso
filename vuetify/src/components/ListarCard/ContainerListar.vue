<script lang="ts" setup>

import Card from "./Card.vue";

const myArray = [
  {
    name: 'Midiala',
    edad: 50,
    apellidos: 'Guerra',
    action: () => alert('Hello Midiala')
  },
  {
    name: 'Maikel',
    edad: 41,
    apellidos: 'Pérez',
    action: () => alert('Hello Maikel')
  },
  {
    name: 'Orisvel',
    edad: 55,
    apellidos: 'Cruz',
    action: () => alert('Hello Orisvel')
  },
]
</script>

<template>
  <Card v-for="(item, index) in myArray" :key="index" :action="item.action" :apellidos="item.apellidos" :name="item.name"
        class="ma-2"/>
</template>

<style scoped>

</style>
