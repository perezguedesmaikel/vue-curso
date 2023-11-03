<template>
  <div>
    <p>Current Lifecycle Stage: {{ lifecycleStage }}</p>
    <p>Data: {{ data }}</p>
  </div>
</template>

<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';


const data = ref('En este ejemplo desplegamos todos los ciclos de vida en consola!!!');
const lifecycleStage = ref('');

onBeforeMount(() => {
  lifecycleStage.value = 'beforeMount';
  console.log('Se ejecuta antes del montage');
});

onMounted(() => {
  lifecycleStage.value = 'mounted';
  console.log('Después del montage');
});

onBeforeUpdate(() => {
  lifecycleStage.value = 'beforeUpdate';
  console.log('Before Update');
});

onUpdated(() => {
  lifecycleStage.value = 'updated';
  console.log('Updated');
});

onBeforeUnmount(() => {
  lifecycleStage.value = 'beforeUnmount';
  console.log('Before Unmount');
});

onUnmounted(() => {
  lifecycleStage.value = 'unmounted';
  console.log('Unmounted');
});


</script>
