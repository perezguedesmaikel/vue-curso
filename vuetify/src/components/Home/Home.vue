<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="elevation-12">
          <v-img height="300" src="00385_mysterybridge_1920x1200.jpg"></v-img>
          <v-card-title class="headline">
            ¡Bienvenido a mi página de inicio!
          </v-card-title>
          <v-card-text>
            Aquí puedes agregar cualquier contenido informativo o promocional
            que desees mostrar a tus visitantes. Puedes personalizar el diseño
            y los elementos según tus necesidades.
          </v-card-text>
          <v-card-actions class="d-flex flex-column">
            <v-btn color="primary">
              Estado global del counter Vuex: {{ count }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="secondary" to="/contact">
              Estado global del counter Pinia: {{ counter.count }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import {useCounterStore} from "@/components/store/piniaStore";

const count = computed(() => store.state.count);
const counter = useCounterStore()

const store = useStore();
</script>

<style scoped>

</style>
