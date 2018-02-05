const About = () => import('./App');
const Default = () => import('./Default');
const Form = () => import('./Form');

export default {
  path: '/about',
  component: About,
  children: [
    { path: '', component: Default },
    { path: 'form', component: Form },
  ],
};
