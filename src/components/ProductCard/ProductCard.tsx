import type { Product } from '../../types/Product';
import './ProductCard.css';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__discount">{product.discount}% OFF</div>
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
      />
      <h4>{product.name}</h4>
      <p className="product-card__original-price">
        ${product.originalPrice.toFixed(2)}
      </p>
      <h3>${product.price.toFixed(2)}</h3>
      <p className="product-card__reviews">{product.reviews} reviews</p>
      <p className="product-card__seller">Vendido por: {product.seller}</p>
      <button className="product-card__button">Comprar</button>
    </div>
  );
};
