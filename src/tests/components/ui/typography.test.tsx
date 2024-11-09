import { render, screen } from '@testing-library/react';
import { Typography } from '@/components/ui';

describe('Typography Component', () => {
  it('should render the title component', () => {
    render(<Typography.Title level={1}>Title 1</Typography.Title>);
    const title = screen.getByText(/Title 1/i);
    expect(title).toBeInTheDocument();
  });

  it('should render the paragraph component', () => {
    render(
      <Typography.Paragraph size="normal">
        Paragraph normal
      </Typography.Paragraph>
    );
    const paragraph = screen.getByText(/Paragraph normal/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('should render the text component', () => {
    render(<Typography.Text>Text</Typography.Text>);
    const text = screen.getByText(/Text/i);
    expect(text).toBeInTheDocument();
  });

  it('should render the text component with italic style', () => {
    render(<Typography.Text italic>Text italic</Typography.Text>);
    const text = screen.getByText(/Text italic/i);
    expect(text).toBeInTheDocument();
  });

  it('should render the text component with strong style', () => {
    render(<Typography.Text strong>Text strong</Typography.Text>);
    const text = screen.getByText(/Text strong/i);
    expect(text).toBeInTheDocument();
  });

  it('should render the text component with underline style', () => {
    render(<Typography.Text underline>Text underline</Typography.Text>);
    const text = screen.getByText(/Text underline/i);
    expect(text).toBeInTheDocument();
  });

  it('should render the text component with small size', () => {
    render(<Typography.Text size="small">Text small</Typography.Text>);
    const text = screen.getByText(/Text small/i);
    expect(text).toBeInTheDocument();
  });
});
