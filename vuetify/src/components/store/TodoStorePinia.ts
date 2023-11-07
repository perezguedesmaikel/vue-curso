import {defineStore} from 'pinia'
import {ref, reactive} from "vue";

interface Task {
    title: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    // el nombre de la tienda, debe ser único
    state: () => ({
        // el estado inicial de la tienda, debe ser una función que devuelve un objeto
        tasks: [] as Task[],
        newTask: ref('')
    }),
    actions: {
        // las acciones son funciones que modifican el estado o realizan otras operaciones
        addTask() {
            if (this.newTask.trim() !== "") {
                this.tasks.push({title: this.newTask, completed: false});
                console.log(this.tasks);
                this.newTask = "";
            }
        },

        toggleTask(index: number) {
            this.tasks[index].completed = !this.tasks[index].completed;
        },

        removeTask(index: number) {
            this.tasks.splice(index, 1);
        }
    }, persist: {
        enabled: true
    }
})
