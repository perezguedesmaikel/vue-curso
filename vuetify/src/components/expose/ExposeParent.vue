<script lang="ts" setup>

import ChildExpose from "./ChildExpose.vue";
import {ref} from "vue";

interface IMyChild {
  value: null | { laMujerDeTodos: (name: string) => void, otraVariable: number }
}

const myChild: IMyChild = ref(null)

function ejecutarAlgoPadre(name: string) {
  alert(`hello world ${name}`)
}

function queUsaLaMujerDeTodos() {
  if (myChild.value) {
    myChild.value.laMujerDeTodos('Cristina')
    myChild.value.otraVariable = 55
  }

}


</script>

<template>
  <v-container class="d-flex flex-column">
    <v-container>
      <v-label>Define expose</v-label>
      <child-expose ref="myChild" @execute="ejecutarAlgoPadre"/>
      <v-btn @click="queUsaLaMujerDeTodos">Ejecutar</v-btn>
    </v-container>
    <v-container>
      <v-label class="mt-10">Carga Perezosa</v-label>
      <v-lazy
        :min-height="200"
        :options="{'threshold':0.5}"
        transition="fade-transition"
      >
        <v-img src="https://fastly.picsum.photos/id/1/1280/800.jpg?hmac=12MWmSdN6Ig_riuGl6f6PeW4K1q6w1sUVHP6vHgyXvU"
               v></v-img>
      </v-lazy>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
