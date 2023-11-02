<script lang="ts" setup>
import ButtonPost from "./ButtonPost.vue";
import CountComponent from "@/components/camparation/CountComponent.vue";
import CalculadoraMini from "@/components/CalculadoraMini.vue";
</script>

<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>
            Título del Post
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet elit eget dui ullamcorper, sed
            facilisis urna condimentum. Nunc vitae mauris pellentesque, scelerisque ligula ac, molestie lacus. Quisque
            tristique nunc et massa egestas, id laoreet augue aliquam. In hac habitasse platea dictumst. Nulla facilisi.
            Donec rhoncus risus ac nisi venenatis, eu efficitur ex ullamcorper. Phasellus ut nulla ut orci eleifend
            convallis in quis ligula. Integer lobortis, risus ac hendrerit laoreet, ligula nulla imperdiet neque, sed
            aliquam metus tellus vitae lectus. Aliquam vitae lacus at turpis consectetur fermentum. Etiam consectetur
            risus sed bibendum imperdiet.
          </v-card-text>
          <v-card-actions class="justify-end">
            <ButtonPost/>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
