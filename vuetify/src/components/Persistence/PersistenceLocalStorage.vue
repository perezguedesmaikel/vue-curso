<template>
  <v-card>
    <v-toolbar class="d-flex justify-between align-center" color="primary" dark elevation="3" rounded="0">
      <v-toolbar-title>
        <v-my-icon animation="ring" name="ci-color-btc" scale="2"></v-my-icon>
      </v-toolbar-title>
      <v-text-field v-model="newTask" class="mt-9 pb-0" label="Nueva tarea" @keyup.enter="addTask"></v-text-field>
      <v-btn class="bg-blue" @click="addTask">Agregar</v-btn>
    </v-toolbar>
  </v-card>
  <v-container v-if="tasks.filter(el=>el.isCompleted).length>0" class="d-flex justify-end" @click="deleteAllActives">
    <v-my-icon animation="spin" class="cursorClass mt-5" fill="red" name="fc-empty-trash" scale="2"></v-my-icon>
  </v-container>

  <v-card v-if="tasks.length>0" class="ma-4">
    <v-list>
      <v-list-item
          v-for="(task, index) in tasks"
          :key="index"

      >
        <v-container class="d-flex justify-space-between align-center">
          <v-checkbox
              v-model="task.isCompleted"
              class="mt-0 mr-2"
              hide-details
              @click="()=>handleCheckBoxChange(index)"
          ></v-checkbox>
          <v-list-item-content>
            <v-list-item-title>{{ task.title }}</v-list-item-title>
            <!--          <v-list-item-subtitle>{{task.subTitle}}</v-list-item-subtitle>-->
          </v-list-item-content>
        </v-container>
      </v-list-item>
    </v-list>
  </v-card>

</template>

<script lang="ts" setup>

import {reactive, ref, watch} from "vue";
import {CiColorBtc, FcEmptyTrash} from "oh-vue-icons/icons";
import {addIcons} from "oh-vue-icons";
import {ITask} from "./interfaces";


addIcons(CiColorBtc, FcEmptyTrash)

let tasks: ITask[] = reactive([])
let newTask = ref('')

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.push({title: newTask.value, isCompleted: false})
    newTask.value = ''
  }

}

function handleCheckBoxChange(index: number) {
  tasks[index].isCompleted = !tasks[index].isCompleted
}

function deleteAllActives() {
  tasks.splice(0, tasks.length, ...tasks.filter(el => !el.isCompleted));
}

watch(tasks, (newTasks) => {
  alert(`El valor de tasks ha cambiado por ${JSON.stringify(newTasks)}`)
})
</script>

<style scoped>
.task-completed {
  background-color: #d8d8d8;
  opacity: 0.6;
}

.cursorClass {
  cursor: pointer;
}
</style>
