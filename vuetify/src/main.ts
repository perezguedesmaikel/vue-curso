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
import CountComponent from "@/components/comparation/CountComponent.vue";
import Home from "@/components/Home/Home.vue";
import OldYoung from "@/components/OldYoung/OldYoung.vue";
import ContainerListar from "@/components/ListarCard/ContainerListar.vue";


const app = createApp(App)

registerPlugins(app)
const routes = [
  {path: '/', component: Home},
  {path: '/calculadora', component: CalculadoraMini},
  {path: '/post', component: ContainerPost},
  {path: '/contador', component: CountComponent},
  {path: '/condiciones', component: OldYoung},
  {path: '/lista', component: ContainerListar},
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
