import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component:() =>import("../views/Home")
  },
  {
    path: "/About",
    name: "About",
    component: () =>import("../views/About")
  },
  {
    path: "/Info",
    name: "info",
    component: () =>import("../views/Info")
  }
];

const router = new VueRouter({
  routes
});

export default router;
