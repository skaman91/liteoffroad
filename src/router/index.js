import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue';
import Game from '../views/Game.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/contacts', component: Contacts },
  { path: '/game', component: Game },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
