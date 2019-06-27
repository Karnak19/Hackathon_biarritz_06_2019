import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/campus",
      name: "Campuses",
      component: () => import("@/views/Campuses.vue")
    },
    {
      path: "/campus/:id",
      name: "Campus",
      component: () => import("@/views/Campus.vue")
    }
  ]
});
