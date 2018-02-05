import Home from './';
import Default from './Default';
import Search from './Search';

// const Home = import('./Home');
// const Default = import('./Default');
// const Search = import('./Search');

export default {
  path: '/',
  component: Home,
  children: [
    { path: '', component: Default },
    { path: 'search', component: Search },
    // { path: 'feeds', component: Feeds },
  ],
};
