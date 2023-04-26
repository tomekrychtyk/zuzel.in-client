import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeCreator } from './theme/theme';
import router from './router';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider theme={themeCreator('defaultTheme')}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
