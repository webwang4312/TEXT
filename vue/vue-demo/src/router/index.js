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
    path: "/Zhuxingtu",
    name: "Zhuxingtu",
    component: () =>import("../views/Zhuxingtu")
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>import("../views/Home")
  }
];

const router = new VueRouter({
  routes
});

export default router;
