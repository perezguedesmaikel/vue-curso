<script lang="ts" setup>
import {ref} from "vue";
import MyGroupTransition from './MyGroupTransition.vue'

const animate = ref(false)

function activeAnimate() {
  animate.value = !animate.value
}
</script>

<template>
  <v-label>Transición simple1</v-label>
  <div class="position-relative">
    <v-btn class="bg-green" @click="activeAnimate">Animar</v-btn>
    <Transition>
      <v-label v-if="animate" class="ma-2 position-absolute text-green-darken-4">Hello world animated este es un texto
        para una
        fusión!!!
      </v-label>
    </Transition>
    <Transition>
      <v-label v-if="!animate" class="ma-2 position-absolute text-green-darken-4">Texto que alterna, waooo esto es una
        fusión
        simple!!
      </v-label>
    </Transition>
  </div>
  <v-label class="mt-4">Transición grupal</v-label>
  <MyGroupTransition/>

</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  opacity: 0.6;
}


</style>
