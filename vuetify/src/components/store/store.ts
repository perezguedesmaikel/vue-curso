// store.js

import {createStore} from 'vuex';

// Definir el estado global
const state = {
    count: 5,
};

// Definir las mutaciones para modificar el estado
const mutations = {
    increment(state: { count: number }) {
        state.count++;
    },
    decrement(state: { count: number }) {
        state.count--;
    },
};

// Crear el store Vuex
const store = createStore({
    state, mutations
});

export default store;
