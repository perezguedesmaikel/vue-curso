<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
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
  {title: 'Traducciones', url: '/translate'},


];
</script>
