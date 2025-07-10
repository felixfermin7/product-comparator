import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../../components/ProductCard';
import { ProductTable } from '../../components/ProductTable';
import { Tabs } from '../../components/Tabs';
import type { Product } from '../../types/Product';

const App = () => {
  const [view, setView] = useState<'cards' | 'table'>('cards');
  const [tab, setTab] = useState('Especificaciones');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3000/api/data'); // Replace with your API endpoint
        
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once after the component mounts.

  console.log('Products fetched:', products);
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ background: 'yellow', padding: 10 }}>Comparación de Productos</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <p style={{ color: 'red' }}>{error}</p>
      ) : view === 'cards' ? (
        <div style={{ display: 'flex', gap: 20 }}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <ProductTable products={products} />
      )}

      <Tabs active={tab} onChange={setTab} />
      <div style={{ marginTop: 20 }}>
        {tab === 'Resumen' && <p>Resumen general de productos...</p>}
        {tab === 'Especificaciones' && view === 'cards' && <ProductTable products={products} />}
        {tab === 'Medios de Pago' && <p>Visa, Mastercard, PSE, cuotas sin interés...</p>}
      </div>
    </div>
  );
};

export default App;
