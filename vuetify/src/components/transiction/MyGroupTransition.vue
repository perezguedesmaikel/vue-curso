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
                  <v-list-item v-for="(task, index) in tasks" :key="index" class="task-item">
                    <v-container class="d-flex justify-space-between">
                      <v-list-item-content>
                        <v-list-item-title :class="{ 'completed-task': task.completed }">{{
                            task.title
                          }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon @click="toggleTask(index)">
                          {{ task.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
                        </v-icon>
                        <v-icon class="text-red" @click="removeTask(index)">mdi-delete</v-icon>
                      </v-list-item-action>
                    </v-container>
                  </v-list-item>
                </TransitionGroup>
              </v-list-item-group>
              <v-list-item v-if="tasks.length===0">
                <v-list-item-content>No hay tareas disponibles. ¡Agrega una nueva!</v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-text-field
              v-model="newTask"
              class="mt-4"
              label="Nueva Tarea"
              outlined
              solo-inverted
              @keyup.enter="addTask"
            ></v-text-field>
            <v-container class="d-flex justify-end pt-0">
              <v-btn class="bg-blue" @click="addTask">Agregar</v-btn>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push({title: this.newTask, completed: false});
        this.newTask = "";
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
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
</style>

