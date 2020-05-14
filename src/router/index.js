import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Pricing from '../views/Pricing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
