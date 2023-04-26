import { FC, ReactNode } from 'react';
import { Box, alpha, lighten, useTheme } from '@mui/material';
import { Outlet } from 'react-router';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',
          '.MuiPageTitle-wrapper': {
            background: theme.colors.alpha.trueWhite[5],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow: `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.7),
              0.15
            )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 5, display: 'block' }}>
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
