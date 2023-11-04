<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <v-btn class="ml-2 bg-blue" @click="emptyBooks">{{ author.books.length > 0 ? 'Llenar' : 'Vaciar' }}</v-btn>
  <v-label v-font-size>Probando directiva!!!</v-label>
  <v-label v-custom-size='70'>Probando directiva!!!</v-label>
  <v-label v-custom-size-arg:200px>Probando directiva!!!</v-label>
  <v-label v-custom-size-modify.sm>Probando directiva!!!</v-label>
  <v-container>{{ JSON.stringify(author.books) }}</v-container>
</template>

<script setup>
import {reactive, computed, ref} from 'vue'

// const author = reactive({
//   name: 'John Doe',
//   books: [
//     {tile: 'Vue 2 - Advanced Guide'},
//     {title: 'Vue 3 - Basic Guide'},
//     {title: 'Vue 4 - The Mystery'}
//   ]
// })
console.log('viendo renderizados');
const author = ref({
  name: 'John Doe',
  books: [
    {tile: 'Vue 2 - Advanced Guide'},
    {title: 'Vue 3 - Basic Guide'},
    {title: 'Vue 4 - The Mystery'}
  ]
})

function emptyBooks() {
  if (author.value.books.length === 0) {
    author.value.books = [
      {tile: 'Vue 2 - Advanced Guide'},
      {title: 'Vue 3 - Basic Guide'},
      {title: 'Vue 4 - The Mystery'}
    ]
  } else {
    author.value.books = [];
  }

}

const publishedBooksMessage = computed(() => {
  return author.value.books.length > 0 ? 'Yes' : 'No'
})
</script>

