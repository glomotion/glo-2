import About from './';
import Default from './Default';
import Form from './Form';

export default {
  path: '/about',
  component: About,
  children: [
    { path: '', component: Default },
    { path: 'form', component: Form },
  ],
};
