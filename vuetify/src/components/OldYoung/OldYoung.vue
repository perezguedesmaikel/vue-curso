<script lang="ts" setup>
import {ref} from 'vue';

const edad = ref(0);
</script>

<template>
  <v-sheet
    class="pa-4 text-center mx-auto"
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">You reconciled this account</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="#">View
      reconciliation report.</a>

      <br>

      Otherwise, you're done!
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-text-field v-model="edad" label="Introduzca su edad"></v-text-field>
      <v-btn
        v-if="edad>18"
        class="text-none"
        color="success"
        rounded
        variant="flat"
        width="200"
      >
        Mayor de Edad
      </v-btn>
      <v-btn
        v-if="edad<18"
        class="text-none"
        color="success"
        rounded
        variant="flat"
        width="200"
      >
        Menor de Edad
      </v-btn>
    </div>
  </v-sheet>
</template>

<style scoped>

</style>
