<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <router-link v-for="(item, index) in items" :key="index" :to="item.url"
                     class="text-green-accent-4 text-decoration-none">
          <v-list-item :value="index">
            {{ item.title }}
          </v-list-item>
        </router-link>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
const items = [
  {title: 'Home', url: '/'},
  {title: 'Calculadora', url: '/calculadora'},
  {title: 'Post', url: '/post'},
  {title: 'Contador', url: '/contador'},
  {title: 'Condiciones', url: '/condiciones'},
  {title: 'Listar', url: '/lista'},
  {title: 'Form', url: '/form'},
  {title: 'Cicle-life', url: '/cicle-life'},
  {title: 'Vertical-Communication', url: '/vertical-communication'},
];
</script>
