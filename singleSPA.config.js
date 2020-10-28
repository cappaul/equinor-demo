import { registerApplication, start } from 'single-spa';

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
