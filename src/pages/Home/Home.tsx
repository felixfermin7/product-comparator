import { useState } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { ProductCard } from '../../components/ProductCard';
import { ProductTable } from '../../components/ProductTable';
import { Tabs } from '../../components/Tabs';
import type { Product } from '../../types/Product';

import './Styles/Home.css'; // Import the styles

const Title = () => (
  <h2 className="header">Comparación de Productos</h2>
);

interface ProductComparatorProps {
  products: Product[];
  view: 'cards' | 'table';
  setView: (view: 'cards' | 'table') => void;
  loading: boolean;
  error: string | null;
}

const ProductComparator = ({ products, view, setView, loading, error }: ProductComparatorProps) => (
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
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    ) : (
      <ProductTable products={products} />
    )}
  </div>
);

const ProductDetails = ({
  tab,
  setTab,
  products,
  view,
}: {
  tab: string;
  setTab: (tab: string) => void;
  products: Product[];
  view: 'cards' | 'table';
}) => (
  <div>
    <Tabs active={tab} onChange={setTab} />
    <div className="tab-content">
      {tab === 'Resumen' && <p>Resumen general de productos...</p>}
      {tab === 'Especificaciones' && view === 'cards' && <ProductTable products={products} />}
      {tab === 'Medios de Pago' && <p>Visa, Mastercard, PSE, cuotas sin interés...</p>}
    </div>
  </div>
);

const App = () => {
  const [view, setView] = useState<'cards' | 'table'>('cards');
  const [tab, setTab] = useState('Especificaciones');

  // Use the custom hook to fetch products
  const { products, loading, error } = useFetchProducts([1, 2, 3, 4]);

  return (
    <div className="app-container">
      <Title />
      <ProductComparator
        products={products}
        view={view}
        setView={setView}
        loading={loading}
        error={error}
      />
      <ProductDetails tab={tab} setTab={setTab} products={products} view={view} />
    </div>
  );
};

export default App;
