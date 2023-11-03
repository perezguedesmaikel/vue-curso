<template>
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <v-btn class="ml-2 bg-blue" @click="emptyBooks">{{ author.books.length > 0 ? 'Llenar' : 'Vaciar' }}</v-btn>
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
</script>

