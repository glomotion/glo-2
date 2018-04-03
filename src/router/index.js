import Vue from 'vue';
import Router from 'vue-router';

// @TODO:
// Build router structure from @/apps/*:
import homeRoutes from '../apps/home/';
// import aboutRoutes from '../apps/about/';

Vue.use(Router);
const router = new Router({
  routes: [
    homeRoutes,
    // aboutRoutes,
  ],
});

export default router;
