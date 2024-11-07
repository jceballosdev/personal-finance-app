import { fireEvent, render, screen } from '@testing-library/react';
import Image, { ImageProps } from '@components/ui/image';
import ImageFallback from '@/assets/images/default-fallback-image.png';

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'https://example.com/test-image.jpg',
    alt: 'Test Image',
  };

  it('render an image with a valid src', () => {
    render(<Image {...defaultProps} />);
    const imgElement = screen.getByRole('img', { name: /test image/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      'src',
      'https://example.com/test-image.jpg'
    );
  });

  it('displays the fallback image when the provided source fails to load', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<Image src="invalid-image" alt="Fallback Test" />);
    const imgElement = screen.getByRole('img', { name: /fallback test/i });

    fireEvent.error(imgElement);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', ImageFallback);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Image not found or failed to load: invalid-image'
    );
    consoleSpy.mockRestore();
  });

  it('applies the width and height correctly', () => {
    render(<Image {...defaultProps} width={200} height={200} />);
    const imgElement = screen.getByRole('img', { name: /test image/i });
    expect(imgElement).toBeInTheDocument();
    const figureElement = imgElement.parentElement;
    expect(figureElement).toHaveStyle('width: 200px');
    expect(figureElement).toHaveStyle('height: 200px');
  });
});
