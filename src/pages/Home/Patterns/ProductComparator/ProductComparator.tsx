import { ProductCard } from '../../../../components/ProductCard/ProductCard';
import { ProductTable } from '../../../../components/ProductTable/ProductTable';
import type { Product } from '../../../../types/Product';
import './ProductComparator.css';

interface Props {
  products: Product[];
  view: 'cards' | 'table';
  setView: (view: 'cards' | 'table') => void;
  loading: boolean;
  error: string | null;
}

const ProductComparator: React.FC<Props> = ({ products, view, setView, loading, error }) => (
  <div>
    <div className="view-toggle">
      <h3>Comparando {products.length} productos</h3>
      <div>
        Ver como:{' '}
        <button onClick={() => setView('cards')}>Tarjetas</button>
        <button onClick={() => setView('table')}>Tabla</button>
      </div>
    </div>

    {loading ? (
      <p>Cargando productos...</p>
    ) : error ? (
      <p className="error">{error}</p>
    ) : view === 'cards' ? (
      <div className="product-cards">
        {products.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    ) : (
      <ProductTable products={products} />
    )}
  </div>
);

export default ProductComparator;
