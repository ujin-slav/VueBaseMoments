import HelloWorldVue from "../components/HelloWorld.vue";
import About from "../pages/About.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: HelloWorldVue
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;