<template>
  <v-sheet class="mx-auto" width="300">
    <v-form class="d-flex flex-column" fast-fail @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First name"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Last name"
      ></v-text-field>
      <v-checkbox v-model="checkBox" label="¿Eres mayor de edad?"></v-checkbox>
      <v-select v-model="inputSelect"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                label="Elige tu ciudad"
      ></v-select>
      <v-label class="ml-2 text-blue-accent-3">{{ inputSelect }}</v-label>
      <v-btn class="mt-2" type="submit" @click="checkBox=!checkBox">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script lang="ts" setup>

import {ref} from 'vue';

const firstName = ref('');
const lastName = ref('');
const checkBox = ref(false);
const inputSelect = ref('Input select');

const firstNameRules = [
  (value: string | undefined) => {
    if (value?.length > 3) return true

    return 'First name must be at least 3 characters.'
  },
];
const lastNameRules = [
  (value: string | undefined) => {
    if (/[^0-9]/.test(value)) return true

    return 'Last name can not contain digits.'
  },
];

</script>

<style scoped>

</style>
