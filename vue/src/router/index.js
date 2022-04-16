import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import Dashboard from "../views/dashboard.vue";
import Surveys from "../views/surveys.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    children: [
      { path: "/dashboard", name: "Dashboard", component: Dashboard },
      { path: "/surveys", name: "Surveys", component: Surveys },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
