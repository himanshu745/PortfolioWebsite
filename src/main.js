import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  {
    name: "/",
    path: "/",
    component: () => import("./components/work/Work"),
  },
  {
    name: "about",
    path: "/about",
    component: () => import("./components/about/About"),
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("./components/contact/Contact"),
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
