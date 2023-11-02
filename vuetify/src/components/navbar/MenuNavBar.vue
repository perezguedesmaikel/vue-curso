<template>
  <div class="d-flex justify-space-around">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
        >
          <v-list-item-title>
            <router-link :to="item.url" class="text-green-accent-4 text-decoration-none">{{ item.title }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {title: 'Home', url: '/'},
      {title: 'Calculadora', url: '/calculadora'},
      {title: 'Post', url: '/post'},
      {title: 'Contador', url: '/contador'},
    ],
  }),
}
</script>
