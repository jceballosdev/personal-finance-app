import { fireEvent, render, screen } from '@testing-library/react';
import Avatar, { AvatarProps } from '@/components/ui/avatar';
import AvatarPlaceholder from '@/assets/images/avatar-placeholder.png';

describe('Avatar Component', () => {
  const defaultProps: AvatarProps = {
    name: 'sun-park',
    user: 'Test User',
  };

  it('renders an avatar with a valid name', () => {
    render(<Avatar {...defaultProps} />);
    const imgElement = screen.getByRole('img', {
      name: /avatar of test user/i,
    });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      'src',
      '/src/assets/images/avatars/sun-park.jpg'
    );
  });

  it('displays the placeholder avatar when the provided name fails to load', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Avatar name="invalid-avatar" user="Fallback Test" />);
    const imgElement = screen.getByRole('img', {
      name: /avatar of fallback test/i,
    });

    fireEvent.error(imgElement);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', AvatarPlaceholder);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Avatar not found or failed to load: invalid-avatar'
    );
    consoleSpy.mockRestore();
  });

  it('applies the size and shape correctly', () => {
    render(<Avatar {...defaultProps} size="sm" shape="circle" />);
    const imgElement = screen.getByRole('img', {
      name: /avatar of test user/i,
    });
    expect(imgElement).toBeInTheDocument();
    const figureElement = imgElement.parentElement;
    expect(figureElement).toHaveStyle('width: 2rem');
    expect(figureElement).toHaveStyle('border-radius: 50%');
  });
});
