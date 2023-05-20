import { render, screen } from '@testing-library/react';
import SuspenseLoader from './SuspenseLoader';

describe('SuspenseLoader', () => {
  it('renders to the screen', () => {
    jest.mock('nprogress', () => {
      return {
        start: () => null
      };
    });

    render(<SuspenseLoader />);
    const loader = screen.getByRole('spinner');
    expect(loader).toBeInTheDocument();
  });
});
