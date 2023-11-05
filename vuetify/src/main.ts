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
import MyFirstForm from "@/components/forms/MyFirstForm.vue";
import CicleLife from "@/components/CicleLife/CicleLife.vue";
import Father from "@/components/comunicationVertical/Father.vue";
import DirectivasPersonalizadas from "@/components/directivas/DirectivasPersonalizadas.vue";
import Services from "@/components/services/Services.vue";
import Login from "@/components/login/Login.vue";
import {initializeApp} from "firebase/app";
import store from "@/components/store/store";
import ContadorGlobal from "@/components/contadorGlobal/ContadorGlobal.vue";
import {createPinia} from "pinia";
import DinamicComponent from "@/components/dinamicComponent/DinamicComponent.vue";
import {OhVueIcon, addIcons} from "oh-vue-icons";
import {FaFlag, RiZhihuFill, CiColorAda} from "oh-vue-icons/icons";
import Transiction from "@/components/transiction/Transiction.vue";

addIcons(FaFlag, RiZhihuFill);
const firebaseConfig = {
    apiKey: "AIzaSyAeD6Pevuygz7QJrLEm_W4EFrhBPcF4rTs",
    authDomain: "curso-vue-d39ea.firebaseapp.com",
    projectId: "curso-vue-d39ea",
    storageBucket: "curso-vue-d39ea.appspot.com",
    messagingSenderId: "134067368717",
    appId: "1:134067368717:web:6dd2c74e7ff6948c22b644"
};
// Importa los íconos que deseas utilizar

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)
const routes = [
    {path: '/', component: Home},
    {path: '/calculadora', component: CalculadoraMini},
    {path: '/post', component: ContainerPost},
    {path: '/contador', component: CountComponent},
    {path: '/condiciones', component: OldYoung},
    {path: '/lista', component: ContainerListar},
    {path: '/form', component: MyFirstForm},
    {path: '/cicle-life', component: CicleLife},
    {path: '/vertical-communication', component: Father},
    {path: '/directivas', component: DirectivasPersonalizadas},
    {path: '/services', component: Services},
    {path: '/login', component: Login},
    {path: '/global', component: ContadorGlobal},
    {path: '/dynamic', component: DinamicComponent},
    {path: '/transaction', component: Transiction},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
addIcons(FaFlag, RiZhihuFill, CiColorAda);
app.use(router)
app.directive('font-size', {
    beforeMount: (el) => {
        el.style.fontSize = '70px'
    }
})
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + 'px'
    }
})
app.directive('custom-size-arg', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.arg
    }
})
app.directive('custom-size-modify', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.modifiers.sm && '200px'
    }
})

initializeApp(firebaseConfig)
app.use(store)
app.use(pinia)
app.component("v-my-icon", OhVueIcon);
app.mount('#app')
