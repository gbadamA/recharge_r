import Vue from "vue";
// import { VueRouter, createWebHistory, createRouter } from "vue-router";
import Router from "vue-router";
import Home from "@/views/home.vue";
import Register from "@/views/register.vue";

Vue.use(Router);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/inscription",
        name: "Register",
        component: Register
    }
];

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;