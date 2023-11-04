<script lang="ts" setup>
import {DataService} from "@/services/services";
import {onBeforeMount} from 'vue';


onBeforeMount(() => {
  const dataService = new DataService();
  dataService.getPosts().then(res => console.log('Viendo respuesta', res));
});

</script>

<template>
  <v-label>Services</v-label>
  <v-label>Aquí se Visualiza la conexión a una API</v-label>
</template>

<style scoped>

</style>
