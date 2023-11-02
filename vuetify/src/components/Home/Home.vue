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
          <v-card-actions>
            <v-btn color="primary" text to="/about">
              Leer más
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="secondary" text to="/contact">
              Contáctanos
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>

</style>
