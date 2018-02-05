import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// @TODO:
// Build router structure from @/apps/*:
import homeRouting from '@/apps/home/routing';
import aboutRouting from '@/apps/about/routing';

const routing = [ homeRouting, aboutRouting ];

const router = new Router({
  routes: routing,
});

export default router;