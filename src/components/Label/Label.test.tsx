import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/default';
import Label from './Label';

describe('Label', () => {
  it('displays given text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Label>LIVE</Label>
      </ThemeProvider>
    );

    const label = screen.getByText(/live/i);
    expect(label).toBeInTheDocument();
  });

  it('has correct color', () => {
    render(
      <ThemeProvider theme={theme}>
        <Label centeredAbsolute color="warning">
          LIVE
        </Label>
      </ThemeProvider>
    );

    const label = screen.getByText(/live/i);
    expect(label).toHaveClass('MuiLabel-warning');
  });
});
