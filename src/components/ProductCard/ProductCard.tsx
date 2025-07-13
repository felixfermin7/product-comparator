import type { Product } from '../../types/Product';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 12, width: 250 }}>
      <div style={{ color: 'red', fontWeight: 'bold' }}>{product.discount}% OFF</div>
      <img src={product.image} alt={product.name} width="100%" />
      <h4>{product.name}</h4>
      <p style={{ textDecoration: 'line-through' }}>${product.originalPrice.toFixed(2)}</p>
      <h3>${product.price.toFixed(2)}</h3>
      <p>{product.reviews} reviews</p>
      <p>Vendido por: {product.seller}</p>
      <button>Comprar</button>
    </div>
  );
};
