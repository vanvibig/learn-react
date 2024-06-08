import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes/Router.tsx'
import { worker } from './mocks/browsers.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.ts';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
