import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    // el nombre de la tienda, debe ser único
    state: () => ({
        // el estado inicial de la tienda, debe ser una función que devuelve un objeto
        count: 0
    }),
    getters: {
        // los getters son funciones que derivan valores del estado
        double: (state) => state.count * 2
    },
    actions: {
        // las acciones son funciones que modifican el estado o realizan otras operaciones
        increment() {
            // el contexto de la acción es la propia tienda, por lo que podemos acceder al estado, a los getters y a otras acciones
            this.count++
        },
        decrement() {
            this.count--
        },
        reset() {
            this.count = 0
        }
    }
})

