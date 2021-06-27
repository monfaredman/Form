import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/Login", component: Login },
  { path: "/", component: Register },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
