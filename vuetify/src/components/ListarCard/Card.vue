<script lang="ts" setup>
import {ref} from 'vue';

defineProps(
  {
    name: {
      type: String,
      default: 'default'
    },
    apellidos: {
      type: String,
      default: 'default'
    },
    action: {
      type: Function,
    }
  }
);
const hasError = ref(false);

function changeHasError() {
  hasError.value = !hasError.value;
}
</script>

<template>
  <v-card :subtitle="apellidos" :title="name" text="Texto de ejemplo..." v-bind:class="{
    'text-green':hasError
  }">
    <v-card-actions>
      <v-btn @click="action">Click me</v-btn>
      <v-btn class="bg-red" @click="changeHasError">Change Status</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
