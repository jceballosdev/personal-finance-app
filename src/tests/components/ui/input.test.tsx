import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/ui/input';

describe('Input Component', () => {
  it('renders the input with a label', () => {
    render(<Input name="username" label="Username" />);

    const labelElement = screen.getByText(/username/i);
    const inputElement = screen.getByRole('textbox', { name: /username/i });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('displays an error message', () => {
    render(<Input name="email" label="Email" error="Invalid email address" />);

    const errorElement = screen.getByText(/invalid email address/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('renders an icon when provided', () => {
    render(
      <Input
        name="search"
        label="Search"
        icon={<span data-testid="icon">🔍</span>}
      />
    );

    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders a prefix when provided', () => {
    render(<Input name="price" label="Price" prefix="$" />);

    const prefixElement = screen.getByText('$');
    expect(prefixElement).toBeInTheDocument();
  });

  it('displays the character count when showCount is true', () => {
    render(
      <Input
        name="description"
        label="Description"
        maxLength={50}
        showCount={true}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: /description/i });
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    const countElement = screen.getByText(/45 characters left/i);
    expect(countElement).toBeInTheDocument();
  });

  it('calls onChange when the input value changes', () => {
    const handleChange = vi.fn();
    render(
      <Input
        name="feedback"
        label="Feedback"
        onChange={handleChange}
        maxLength={100}
      />
    );

    const inputElement = screen.getByRole('textbox', { name: /feedback/i });
    fireEvent.change(inputElement, { target: { value: 'Great job!' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
