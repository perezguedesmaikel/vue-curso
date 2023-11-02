/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import App from './App.vue'


import {createApp} from 'vue'

// Plugins
import {registerPlugins} from '@/plugins'
import ContainerPost from "@/components/posts/ContainerPost.vue";
import CalculadoraMini from "@/components/CalculadoraMini.vue";
import {createRouter, createWebHashHistory} from "vue-router";


const app = createApp(App)

registerPlugins(app)
const routes = [
    {path: '/', component: ContainerPost},
    {path: '/calculadora', component: CalculadoraMini},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
app.use(router)

app.mount('#app')
