import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/location",
        name: "location",
        component: () => import("../views/Location.vue"),
    },
    {
        path: "/careers",
        name: "careers",
        component: () => import("../views/Careers.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "active",
});

export default router;
