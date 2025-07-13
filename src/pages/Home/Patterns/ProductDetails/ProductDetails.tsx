import { Tabs } from '../../../../components/Tabs';
import { ProductTable } from '../../../../components/ProductTable';
import type { Product } from '../../../../types/Product';
import './ProductDetails.css';

interface Props {
  tab: string;
  setTab: (tab: string) => void;
  products: Product[];
  view: 'cards' | 'table';
}

const ProductDetails: React.FC<Props> = ({ tab, setTab, products, view }) => (
  <div>
    <Tabs active={tab} onChange={setTab} />
    <div className="tab-content">
      {tab === 'Resumen' && <p>Resumen general de productos...</p>}
      {tab === 'Especificaciones' && view === 'cards' && <ProductTable products={products} />}
      {tab === 'Medios de Pago' && <p>Visa, Mastercard, PSE, cuotas sin interés...</p>}
    </div>
  </div>
);

export default ProductDetails;
