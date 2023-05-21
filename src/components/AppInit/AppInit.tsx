import { Box } from '@mui/material';
import SuspenseLoader from '../SuspenseLoader/SuspenseLoader';

function AppInit() {
  return (
    <Box
      sx={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%'
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <SuspenseLoader />
    </Box>
  );
}

export default AppInit;
