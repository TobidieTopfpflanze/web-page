import Vue from "vue";
import App from "@/App.vue";
import vueRouter from "vue-router";

import Home from "@/components/Home";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Test from "@/components/templates/Documentation.vue";

Vue.use(vueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", name: "root", component: Home },
  { path: "/test", name: "test", component: Test },
  { path: "/home", name: "home", component: Home },
  { path: "/projects", name: "projects", component: Projects },
  { path: "/about", name: "about", component: About },
  { path: "/contact", name: "contact", component: Contact },
];

const router = new vueRouter({ routes });

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
}).$mount("#app");
