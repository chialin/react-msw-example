import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// https://mswjs.io/docs/integrations/browser#conditionally-enable-mocking
async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

if (process.env.NODE_ENV === 'development') {
  await enableMocking();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
