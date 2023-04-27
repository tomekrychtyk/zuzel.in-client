import Scrollbar from '@/components/Scrollbar/Scrollbar';
import {
  Box,
  //   Drawer,
  alpha,
  styled,
  Divider,
  Link,
  useTheme,
  lighten
} from '@mui/material';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import SidebarMenu from './SidebarMenu/SidebarMenu';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
          width: ${theme.sidebar.width};
          min-width: ${theme.sidebar.width};
          color: ${theme.colors.alpha.trueWhite[70]};
          position: relative;
          z-index: 7;
          height: 100%;
          padding-bottom: 61px;
  `
);

export default function Sidebar() {
  const theme = useTheme();
  return (
    <SidebarWrapper
      sx={{
        display: {
          xs: 'none',
          lg: 'inline-block'
        },
        position: 'fixed',
        left: 0,
        top: 0,
        background: alpha(lighten(theme.header.background || '', 0.1), 0.5),
        boxShadow: theme.sidebar.boxShadow
      }}
    >
      <Scrollbar>
        <Box mt={3}>
          <Box
            mx={2}
            sx={{
              width: 52
            }}
          >
            <Box display="flex">
              <SportsMotorsportsIcon />
              <Box sx={{ pl: '8px' }}>
                <Link href="/" sx={{ color: theme.colors.alpha.trueWhite[70] }}>
                  ZUZEL.IN
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            my: theme.spacing(3),
            mx: theme.spacing(2),
            background: theme.colors.alpha.trueWhite[10]
          }}
        />
        <SidebarMenu />
      </Scrollbar>
    </SidebarWrapper>
  );
}
