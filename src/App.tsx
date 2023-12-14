import React from 'react';
import './App.scss';
import { BdsThemeProvider } from 'blip-ds/dist/blip-ds-react/components';
import { AppRoutes } from './routes';
import { useLocation } from 'react-router-dom';
import Theme from './themes';
import { themes } from './themes/theme-interface';

const browserTheme = window.matchMedia('(prefers-color-scheme: dark)');

const App = () => {
  const location = useLocation();
  return (
    <BdsThemeProvider theme={browserTheme.matches ? 'dark' : 'light'} class="provider-global">
      <Theme theme={location.pathname.replace('/', '') as themes} slot={<AppRoutes />}></Theme>
    </BdsThemeProvider>
  );
};
export default App;
