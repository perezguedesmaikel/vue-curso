<script lang="ts" setup>

defineEmits(
    ['hello']
);
defineProps({name: String, age: Number});

</script>

<template>
  <v-card class="bg-amber  d-flex flex-column justify-center align-center custom-height-child">{{ name!! + age }}
    <v-btn class="bg-blue-accent-3" @click="$emit('hello','Bartolo!!')">h</v-btn>
  </v-card>

</template>

<style scoped>
.custom-height-child {
  height: 70px;
  width: 100px;
}
</style>
