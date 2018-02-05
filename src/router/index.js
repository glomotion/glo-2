import Vue from 'vue';
import Router from 'vue-router';

// @TODO:
// Build router structure from @/apps/*:
import homeRouting from '@/apps/home/routing';
import aboutRouting from '@/apps/about/routing';

Vue.use(Router);
const router = new Router({
  routes: [
    homeRouting, aboutRouting,
  ],
});

export default router;
