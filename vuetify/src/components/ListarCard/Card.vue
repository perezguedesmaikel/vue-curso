<script lang="ts" setup>
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
</script>

<template>
  <v-card :subtitle="apellidos" :title="name" text="...">
    <v-card-actions>
      <v-btn @click="action">Click me</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
