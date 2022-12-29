import HelloWorldVue from "../components/HelloWorld.vue";
import HelloWorldVueStore from "../components/HelloWorldStore.vue";
import About from "../pages/About.vue";
import {createRouter, createWebHistory} from "vue-router";
import Post from "../pages/Post.vue";

const routes = [
    {
        path: '/',
        component: HelloWorldVue
    },
    {
        path: '/store',
        component: HelloWorldVueStore
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/post/:id',
        component: Post
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;