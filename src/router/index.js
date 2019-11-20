import Vue from "vue";
import Router from "vue-router";

const routerOptions = [
    { path: "/home", component: "Home" },
    { path: "/location", component: "Location" },
    { path: "/photpolio", component: "Photopolio" },
    { path: "/business", component: "Business" },
    { path: "/introduce", component: "Introduce" },
    { path: "*", component: "NotFound" }
];

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(`../components/${route.component}.vue`)
    };
});

Vue.use(Router);

export default new Router({
    mode: "history",
    routes
});