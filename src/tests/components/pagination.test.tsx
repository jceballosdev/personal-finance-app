import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '@/components/pagination';

describe('Pagination Component', () => {
  const onPageChangeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the pagination component with correct number of pages', () => {
    render(
      <Pagination
        totalPages={8}
        currentPage={1}
        onPageChange={onPageChangeMock}
      />
    );

    // Verifica que el botón "Prev" esté deshabilitado en la primera página
    const prevButton = screen.getByLabelText('Previous Page');
    expect(prevButton).toBeDisabled();

    // Verifica que el botón "Next" esté habilitado
    const nextButton = screen.getByLabelText('Next Page');
    expect(nextButton).not.toBeDisabled();

    // Verifica que el botón de la página actual esté marcado
    const currentPageButton = screen.getByRole('button', { name: /1/i });
    expect(currentPageButton).toHaveAttribute('aria-current', 'page');

    // Verifica que todos los botones de las páginas se rendericen
    expect(screen.getAllByRole('button').length).toBeGreaterThan(2); // Excluye "Prev" y "Next"
  });

  it('renders ellipsis when pages are skipped', () => {
    render(
      <Pagination
        totalPages={20}
        currentPage={10}
        onPageChange={onPageChangeMock}
      />
    );

    // Verifica que los puntos suspensivos se rendericen
    expect(screen.getAllByText('...').length).toBeGreaterThan(0);
  });

  it('calls onPageChange when a page button is clicked', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={1}
        onPageChange={onPageChangeMock}
      />
    );

    const pageButton = screen.getByRole('button', { name: /2/i });
    fireEvent.click(pageButton);

    // Verifica que se haya llamado la función de cambio de página
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('disables the "Next" button on the last page', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={5}
        onPageChange={onPageChangeMock}
      />
    );

    const nextButton = screen.getByLabelText('Next Page');
    expect(nextButton).toBeDisabled();
  });

  it('disables the "Prev" button on the first page', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={1}
        onPageChange={onPageChangeMock}
      />
    );

    const prevButton = screen.getByLabelText('Previous Page');
    expect(prevButton).toBeDisabled();
  });

  it('navigates to the previous page when "Prev" button is clicked', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={3}
        onPageChange={onPageChangeMock}
      />
    );

    const prevButton = screen.getByLabelText('Previous Page');
    fireEvent.click(prevButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it('navigates to the next page when "Next" button is clicked', () => {
    render(
      <Pagination
        totalPages={5}
        currentPage={3}
        onPageChange={onPageChangeMock}
      />
    );

    const nextButton = screen.getByLabelText('Next Page');
    fireEvent.click(nextButton);

    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });
});
