import { render, screen } from '@testing-library/react';
import Scrollbar from './Scrollbar';

describe('Scrollbar', () => {
  test('renders with children to the screen', () => {
    render(
      <Scrollbar>
        <button>Test</button>
      </Scrollbar>
    );

    const button = screen.getByRole('button', {
      name: /test/i
    });

    expect(button).toBeInTheDocument();
  });
});
