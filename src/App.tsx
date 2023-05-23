import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import AppInit from './components/AppInit/AppInit';
// import { useAppInit } from './hooks/useAppInit';
import { themeCreator } from './theme/theme';
import router from './router';

function App() {
  // const { teams } = useAppInit();
  // let initialized = false;

  // if (teams) {
  //   initialized = true;;
  // }

  const content = useRoutes(router);

  return (
    <ThemeProvider theme={themeCreator('defaultTheme')}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
