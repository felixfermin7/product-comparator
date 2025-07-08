import { useState } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { ProductTable } from '../../components/ProductTable';
import { Tabs } from '../../components/Tabs';
import type { Product } from '../../types/Product';

const products: Product[] = [
  {
    id: 'sony',
    name: 'Auriculares Inalámbricos Sony WH-1000XM4',
    image: 'https://i.imgur.com/tGbaZCY.jpg',
    price: 349.99,
    originalPrice: 399.99,
    discount: 13,
    seller: 'Sony Official Store',
    sales: 5243,
    rating: 4.5,
    reviews: 1283,
    shipping: true,
    type: 'Over-ear',
    connectivity: 'Bluetooth 5.0',
    battery: '30 horas',
  },
  {
    id: 'airpods',
    name: 'Apple AirPods Pro con Cancelación Activa de Ruido',
    image: 'https://i.imgur.com/W5vNwPm.jpg',
    price: 249.99,
    originalPrice: 279.99,
    discount: 11,
    seller: 'Apple Premium Reseller',
    sales: 10243,
    rating: 4.7,
    reviews: 2456,
    shipping: true,
    type: 'In-ear',
    connectivity: 'Bluetooth 5.0',
    battery: '24 horas (con estuche)',
  },
  {
    id: 'bose',
    name: 'Auriculares Bose 700 con Cancelación de Ruido',
    image: 'https://i.imgur.com/uj6blGS.jpg',
    price: 379.99,
    originalPrice: 399.99,
    discount: 5,
    seller: 'Bose Argentina',
    sales: 3421,
    rating: 4.6,
    reviews: 987,
    shipping: true,
    type: 'Over-ear',
    connectivity: 'Bluetooth 5.0',
    battery: '20 horas',
  },
  {
    id: 'jabra',
    name: 'Auriculares Inalámbricos Jabra Elite 75t',
    image: 'https://i.imgur.com/Jc9sM7Z.jpg',
    price: 149.99,
    originalPrice: 179.99,
    discount: 17,
    seller: 'Tecno Shop',
    sales: 1876,
    rating: 4.3,
    reviews: 1024,
    shipping: true,
    type: 'In-ear',
    connectivity: 'Bluetooth 5.0',
    battery: '28 horas (con estuche)',
  },
];

const App = () => {
  const [view, setView] = useState<'cards' | 'table'>('cards');
  const [tab, setTab] = useState('Especificaciones');

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

      {view === 'cards' ? (
        <div style={{ display: 'flex', gap: 20 }}>
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
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
