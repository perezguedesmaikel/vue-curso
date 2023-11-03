<template>
  <v-card class="bg-blue-accent-3 custom-height d-flex flex-column justify-center align-center"><p class="mb-10">
    Hijo</p>
    <div class="d-flex flex-wrap">
      <ChildSon v-for="el in info" :key="el.name" :age="el.age" :name="el.name" @hello="showMessage"/>
    </div>
  </v-card>

</template>

<script lang="ts" setup>
import ChildSon from "./ChildSon.vue";
import {ref} from 'vue';

interface IInfo {
  name: string,
  age: number
}

const info = ref([{name: 'Juan', age: 13}, {
  name: 'Pedro',
  age: 11
}, {name: 'Luis', age: 7}, {
  name: 'Jose',
  age: 17
}, {name: 'Pepe', age: 4}]);

defineProps({
  message: {
    type: String,
    required: true
  }
})

function showMessage(msg: string) {
  info.value[0].name = msg;
}

</script>
<style scoped>
.custom-height {
  height: 500px;
  width: 500px;
}
</style>
