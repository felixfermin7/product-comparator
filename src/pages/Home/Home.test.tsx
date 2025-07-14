import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Home from './Home';
import { useFetchProducts } from '../../hooks/useFetchProducts';

// Mock useFetchProducts hook
vi.mock('../../hooks/useFetchProducts', () => ({
  useFetchProducts: vi.fn(),
}));

// Mock child components
vi.mock('./Patterns/Title/Title', () => ({
  default: () => <div data-testid="title">Title Component</div>,
}));
vi.mock('./Patterns/ProductComparator/ProductComparator', () => ({
  default: () => <div data-testid="product-comparator">ProductComparator Component</div>,
}));
vi.mock('./Patterns/ProductDetails/ProductDetails', () => ({
  default: () => <div data-testid="product-details">ProductDetails Component</div>,
}));

describe('Home Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
  });

  it('renders correctly with loading state', () => {
    const mockUseFetchProducts = vi.fn().mockReturnValue({
      products: [],
      loading: true,
      error: null,
    });
    vi.mocked(useFetchProducts).mockImplementation(mockUseFetchProducts);

    render(<Home />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('product-comparator')).toBeInTheDocument();
    expect(screen.getByTestId('product-details')).toBeInTheDocument();
  });

  it('renders correctly with error state', () => {
    const mockUseFetchProducts = vi.fn().mockReturnValue({
      products: [],
      loading: false,
      error: 'Error fetching products',
    });

    vi.mocked(useFetchProducts).mockImplementation(mockUseFetchProducts);

    render(<Home />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('product-comparator')).toBeInTheDocument();
    expect(screen.getByTestId('product-details')).toBeInTheDocument();
  });

  it('renders correctly with products', () => {
    const mockUseFetchProducts = vi.fn().mockReturnValue({
      products: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
      loading: false,
      error: null,
    });

    vi.mocked(useFetchProducts).mockImplementation(mockUseFetchProducts);

    render(<Home />);

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('product-comparator')).toBeInTheDocument();
    expect(screen.getByTestId('product-details')).toBeInTheDocument();
  });
});
