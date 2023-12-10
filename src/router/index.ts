import auth from "@/middleware/authMiddleware";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HeaderPage from "../components/Layout/TheHeader.vue"


const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "home",
      component: () =>
      import("../views/HomeView.vue"),
      children: [
        { path: '', component: HeaderPage }
      ]
    },
    {
      path: '/course/:id',
      name: "course",
      component: () =>
        import("../views/CourseView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import("../views/UserLogin.vue"),
    },
    {
      path: "/registration",
      name: "registration",
      component: () =>
        import("../views/UserRegistration.vue"),
    },
    {
      path: '/itinerary/:id',
      name: "itinerary",
      component: () =>
        import("../views/CourseItinerary.vue"),
      beforeEnter: auth
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => { 
  return next();
})

export default router;
