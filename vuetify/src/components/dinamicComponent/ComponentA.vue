<script lang="ts" setup>
import {ref} from "vue";
import {addIcons, OhVueIcon} from 'oh-vue-icons'
import {GiAncientSword} from 'oh-vue-icons/icons'


let show = ref(true)

addIcons(GiAncientSword)

function changeShow() {
  show.value = !show.value
}
</script>

<template>
  <div class="d-flex">
    <v-icon name="gi-ancient-sword" scale="4"/>
    <transition name="fade">
      <div v-if="show">Hola</div>
    </transition>
    <transition name="fade">
      <div v-if="!show">adios</div>
    </transition>

    <v-btn class="bg-blue" @click="changeShow">Mostrar</v-btn>
    <v-icon name="gi-ancient-sword" scale="4"/>
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
