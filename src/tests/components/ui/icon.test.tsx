import Icon, { IconProps } from '@/components/ui/icon';
import { render, screen } from '@testing-library/react';

describe('Icon Component', () => {
  const defaultProps: IconProps = {
    name: 'ellipsis',
    size: 24,
  };

  it('render an icon with a valid name', () => {
    render(<Icon {...defaultProps} />);
    const icon = screen.getByAltText('ellipsis icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', '/src/assets/icons/icon-ellipsis.svg');
  });

  it('render a placeholder icon with an invalid name', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Icon name="invalid" />);
    expect(consoleSpy).toHaveBeenCalledWith('Icon invalid not found');
    consoleSpy.mockRestore();
  });
});
