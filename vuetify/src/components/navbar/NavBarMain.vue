<script lang="js" setup>

import ContainerPost from "@/components/posts/ContainerPost.vue";
</script>

<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>My VUE Application!!!</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <router-link to="/">Go to Home</router-link>
          <router-link to="/calculadora">Calculadora</router-link>
          <router-view/>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

</style>
