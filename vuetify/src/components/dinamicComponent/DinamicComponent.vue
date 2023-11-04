<template>
  <div id="dynamicComponent">
    <h1>Componentes dinámicos</h1>
    <v-btn class="bg-blue ma-2" @click="toggle">Cambiar componente</v-btn>
    <component v-bind:is="currentComponent"></component>

  </div>
</template>

<script>
import {ref} from 'vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  name: 'DynamicComponent',
  components: {
    ComponentA,
    ComponentB,
  },
  setup() {
    // Utiliza ref para crear una variable reactiva
    const currentComponent = ref('ComponentA');

    // Utiliza la función toggle para cambiar entre ComponentA y ComponentB
    const toggle = () => {
      currentComponent.value =
          currentComponent.value === 'ComponentA' ? 'ComponentB' : 'ComponentA';
    };

    // Retorna las variables y funciones que quieres exponer en el template
    return {
      currentComponent,
      toggle,
    };
  },
};
</script>

