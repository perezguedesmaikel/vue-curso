<script lang="ts" setup>
import {ref} from "vue";

function hacerAlgo() {
  alert('haciendo algo')
}

const otraVariable = ref(0)

function laMujerDeTodos(name?: string) {
  alert(`Soy la jevita de todos${'Mi nombre es' + name}`)
}

defineEmits(['execute'])
defineExpose({laMujerDeTodos, otraVariable})
</script>

<template>
  <v-label class="text-blue">Child expose</v-label>
  <v-btn class="bg-blue" @click="hacerAlgo">Aceptar</v-btn>
  <v-btn class="bg-blue" @click="$emit('execute','Jorge Pérez')">Desde el padre</v-btn>
  <v-label>variable:{{ otraVariable }}</v-label>
</template>

<style scoped>

</style>
