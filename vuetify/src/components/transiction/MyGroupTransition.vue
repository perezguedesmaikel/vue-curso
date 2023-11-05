<!-- TodoList.vue -->
<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" lg="6" md="8">
          <v-card class="elevation-12">
            <v-card-title class="headline text-center text-blue">Lista de tareas</v-card-title>
            <v-divider></v-divider>
            <v-list>
              <v-list-item-group>
                <TransitionGroup>
                  <v-list-item v-for="(task, index) in todo.tasks" :key="index" class="task-item">
                    <v-container class="d-flex justify-space-between">
                      <v-list-item-content>
                        <v-list-item-title :class="{ 'completed-task': task.completed }">{{
                            task.title
                          }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon @click="todo.toggleTask(index)">
                          {{ task.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                        </v-icon>
                        <v-icon class="text-red" @click="todo.removeTask(index)">mdi-delete</v-icon>
                      </v-list-item-action>
                    </v-container>
                  </v-list-item>
                </TransitionGroup>
              </v-list-item-group>
              <v-list-item v-if="todo.tasks.length===0">
                <v-list-item-content>No hay tareas disponibles. ¡Agrega una nueva!</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-text-field
                v-model="todo.newTask"
                class="mt-4"
                label="Nueva Tarea"
                outlined
                solo-inverted
                @keyup.enter="todo.addTask"
            ></v-text-field>
            <v-container class="d-flex justify-end pt-0">
              <v-btn class="bg-blue" @click="todo.addTask">Agregar</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-container class="d-flex flex-column">
        <v-label class="mt-10">Aquí vamos a poner ejemplos de íconos...</v-label>
        <v-container>
          <v-my-icon animation="pulse" class="mt-10 classPointer" fill="blue" name="ci-color-ada" scale="4"></v-my-icon>
          <v-my-icon animation="ring" fill="red" name="gi-ancient-sword" scale="4"/>
          <v-my-icon animation="wrench" name="pi-castform-sunny" scale="3.5"/>
        </v-container>
      </v-container>
    </v-container>
  </v-app>
</template>

<script setup>

import {addIcons} from "oh-vue-icons";
import {GiAncientSword, PiCastformSunny} from "oh-vue-icons/icons";
import {useTodoStore} from "@/components/store/TodoStorePinia";

addIcons(GiAncientSword, PiCastformSunny);
const todo = useTodoStore();


// const tasks = reactive([])
// let newTask = ref("")


// function addTask() {
//   if (newTask.value.trim() !== "") {
//     tasks.push({title: newTask.value, completed: false});
//     newTask.value = "";
//   }
// }
//
// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
// }
//
// function removeTask(index) {
//   tasks.splice(index, 1);
// }

</script>

<style scoped>
.task-item {
  transition: background-color 0.3s;
}

.task-item:hover {
  background-color: #f0f0f0;
}

.completed-task {
  text-decoration: line-through;
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  opacity: 0.6;
}

.classPointer {
  cursor: pointer;
}
</style>

