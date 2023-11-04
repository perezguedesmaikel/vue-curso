<script lang="ts" setup>
import {ref} from "vue";

let show = ref(true)

function changeShow() {
  show.value = !show.value
}
</script>

<template>
  <div class="d-flex">
    <transition name="fade">
      <div v-if="show">Hola</div>
    </transition>
    <v-btn class="bg-blue" @click="changeShow">Mostrar</v-btn>

    <v-label>ComponentA real!!!</v-label>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
