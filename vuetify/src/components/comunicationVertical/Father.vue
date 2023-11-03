<template>
  <v-card class="d-flex flex-column justify-center align-center custom-height"><p class="mb-8">Padre</p>
    <Son message="Soy el Hijo"></Son>
  </v-card>

</template>

<script setup>
import Son from './Son.vue';
import {ref} from 'vue';


const parentMessage = ref('Hello from Parent!');
const childMessage = ref('');

function handleChildEvent(messageFromChild) {
  childMessage.value = messageFromChild;
}

</script>
<style scoped>
.custom-height {
  height: 800px;
}
</style>
