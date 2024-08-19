import Signup from './pages/Signup.svelte';
import Profile from './pages/Profile.svelte';
import Home from './pages/Home.svelte';
import Login from './pages/Login.svelte';

const routes = {
  '/': Home,
  '/signup': Signup,
  '/profile': Profile,
  '/login': Login,
};

export default routes;
