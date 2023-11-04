<template>
  <v-app>
    <v-main>
      <v-container class="customHeight" fluid>
        <v-row align="center" class="fill-height" justify="center">
          <v-col cols="12" md="4" sm="8">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark>
                <v-toolbar-title>Iniciar sesión</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                      v-model="email"
                      label="Correo electrónico"
                      outlined
                      prepend-icon="mdi-account"
                      required
                  ></v-text-field>
                  <v-text-field
                      v-model="password"
                      label="Contraseña"
                      outlined
                      prepend-icon="mdi-lock"
                      required
                      type="password"
                  ></v-text-field>
                  <v-btn block color="primary" type="submit">Iniciar sesión</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import {DataService} from "@/services/services";
import {ref} from "vue";

const email = ref('')
const password = ref('')

function login() {
  const service = new DataService()
  service.login(email.value, password.value).then(res => console.log('viendo si se autentificó', res))
  console.log('login', email.value, password.value)
}
</script>

<style scoped>
.fill-height {
  height: 100vh;
}

.customHeight {
  height: 75vh;
}
</style>
