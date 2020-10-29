import { registerApplication, start } from 'single-spa';
import './EquinorApp/App.js';

registerApplication(
  'vue',
  () => import('./singleSPA/vue/index.js'),
  () =>
    location.pathname === '/vue' || location.pathname === '/' ? true : false,
);

registerApplication(
  'react',
  () => import('./singleSPA/react/index.js'),
  () =>
    location.pathname === '/react' || location.pathname === '/' ? true : false,
);

registerApplication(
  'vanillajs',
  () => import('./singleSPA/vanillajs/index.js'),
  () =>
    location.pathname === '/vanillajs' || location.pathname === '/'
      ? true
      : false,
);

start();
