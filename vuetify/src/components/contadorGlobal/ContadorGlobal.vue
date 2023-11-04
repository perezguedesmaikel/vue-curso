<!-- Counter.vue -->

<template>
  <div>
    <p class="text-blue">Contador Vuex: {{ count }}</p>
    <v-btn class="bg-blue" @click="increment">Incrementar</v-btn>
    <v-btn class="bg-red" @click="decrement">Decrementar</v-btn>
  </div>
  <div class="mt-10">
    <p class="text-blue">Contador Pinia: {{ counter.count }}</p>
    <v-btn class="bg-blue" @click="counter.increment">Incrementar</v-btn>
    <v-btn class="bg-red" @click="counter.decrement">Decrementar</v-btn>
  </div>
</template>

<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {useCounterStore} from "@/components/store/piniaStore";

const counter = useCounterStore()
// Obtiene el store global
const store = useStore();

// Define una propiedad computada para acceder al estado 'count' del store
const count = computed(() => store.state.count);

// Define dos métodos para realizar mutaciones en el estado global
const increment = () => {
  store.commit('increment'); // Llama a la mutación 'increment'
};
const decrement = () => {
  store.commit('decrement'); // Llama a la mutación 'decrement'
};

// Devuelve el estado y los métodos para que sean accesibles desde el template

</script>


