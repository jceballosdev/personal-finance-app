import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui';
import styles from '@styles/components/ui/button.module.scss';

describe('Button Component', () => {
  it('renders the button with children correctly', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText(/secondary button/i);
    expect(buttonElement.parentElement).toHaveClass(styles.secondary);
  });

  it('renders an icon on the left side', () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>}>With Icon</Button>
    );
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders an icon on the right side', () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>} iconPosition="right">
        With Icon
      </Button>
    );
    const buttonElement = screen.getByText(/with icon/i);
    const iconElement = screen.getByTestId('icon');

    expect(buttonElement.parentElement?.lastChild).toBe(iconElement);
  });

  it('renders loading state correctly', () => {
    render(<Button loading>Loading Button</Button>);
    const buttonElement = screen.getByText(/loading button/i);
    expect(buttonElement.parentNode).toBeDisabled();
  });

  it('applies the "squared" class when the squared prop is true', () => {
    render(<Button squared>Squared Button</Button>);
    const buttonElement = screen.getByText(/squared button/i);
    expect(buttonElement.parentNode).toHaveClass(styles.squared);
  });

  it('applies the "current" class when the current prop is true', () => {
    render(<Button current>Current Button</Button>);
    const buttonElement = screen.getByText(/current button/i);
    expect(buttonElement.parentNode).toHaveClass(styles.current);
  });

  it('handles click events correctly', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const buttonElement = screen.getByText(/clickable button/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button as a custom component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/custom">Link Button</a>
      </Button>
    );
    const linkElement = screen.getByText(/link button/i);
    expect(linkElement.tagName).toBe('A');
  });
});
