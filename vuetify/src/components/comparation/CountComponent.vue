<template>
  <div class="pa-5">
    <h1>{{ count }}</h1>
    <CountButton :custom-function="increment" color="green" text="Incrementar"/>
    <CountButton :custom-function="decrement" color="red" text="Decrementar"/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import CountButton from "./CountButton.vue";

const count = ref(0);

const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value >= 1) {
    count.value--;
  }
};
</script>
