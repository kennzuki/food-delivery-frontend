import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from './context/CartContext';
import AuthProviderWithNavigate from './auth/AuthProviderWithNavigate.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProviderWithNavigate>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProviderWithNavigate>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
