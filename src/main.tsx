import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import App from '@/App';
import getClient from '@/config/queryClient';

import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/fonts.css';

const queryClient = getClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
