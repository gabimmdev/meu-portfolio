import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Adicionar a CSSBaseline da MUI para garantir um estilo consistente */}
    <App />
    </ThemeProvider>
  </StrictMode>,
)
