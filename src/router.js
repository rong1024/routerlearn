import Vue from "vue";
import VueRouter from "vue-router";
import phone from "./phone.vue";
import tablet from "./tablet.vue";
import home from "./home.vue";
import about from "./about.vue";
import user from "./user.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: home,
    children: [
      {
        path: "phone",
        component: phone,
      },
      {
        path: "tablet",
        component: tablet,
      },
      {
        path: "",
        component: phone,
      },
    ],
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/user/:id",
    name: "user",
    component: user,
  },
]

const router = new VueRouter({
  routes,
})

export default router;
