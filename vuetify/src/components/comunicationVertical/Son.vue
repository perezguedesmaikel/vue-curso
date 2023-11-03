<template>
  <v-card class="bg-blue-accent-3 custom-height d-flex flex-column justify-center align-center"><p class="mb-10">
    Hijo</p>
    <ChildSon/>
  </v-card>

</template>

<script setup>
import {defineProps} from 'vue';
import ChildSon from "@/components/comunicationVertical/ChildSon.vue";

defineProps({
  message: {
    type: String,
    required: true
  }
})


</script>
<style scoped>
.custom-height {
  height: 500px;
  width: 500px;
}
</style>
