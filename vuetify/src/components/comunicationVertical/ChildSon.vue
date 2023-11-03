<script lang="ts">
import {defineComponent} from "vue";
import {emptyStatement} from "@babel/types";

export default defineComponent({
  name: 'ChildSon',
  methods: {emptyStatement},
  props: {
    name: String,
    age: Number
  },
  emits: ['hello'],
  setup(props) {
    return props
  }
});


</script>

<template>
  <v-card class="bg-amber  d-flex flex-column justify-center align-center custom-height-child">{{ name!! + age }}
    <v-btn class="bg-blue-accent-3" @click="$emit('hello','Bartolo!!')">h</v-btn>
  </v-card>

</template>

<style scoped>
.custom-height-child {
  height: 70px;
  width: 100px;
}
</style>
