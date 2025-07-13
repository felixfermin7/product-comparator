import { useState } from 'react';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import Title from './Patterns/Title/Title';
import ProductComparator from './Patterns/ProductComparator/ProductComparator';
import ProductDetails from './Patterns/ProductDetails/ProductDetails';
import './Styles/Home.css';

const Home = () => {
  const [view, setView] = useState<'cards' | 'table'>('cards');
  const [tab, setTab] = useState('Especificaciones');

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

export default Home;
