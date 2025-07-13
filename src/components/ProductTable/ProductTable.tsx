import type { Product } from '../../types/Product';
import './ProductTable.css';

interface Props {
  products: Product[];
}

export const ProductTable: React.FC<Props> = ({ products }) => {
  const isSmallDevice = window.innerWidth <= 480; // Example breakpoint for small devices

  return (
    <table className="product-table">
      <thead>
        {!isSmallDevice && (
          <tr>
            <th>Especificación</th>
            {products.map((p) => (
              <th key={p.id}>
                <img src={p.image} width="50" />
                <br/>
                <span>{p.name}</span>
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {isSmallDevice ? (
          products.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.image} width="50" />
                <br/>
                <span>{p.name}</span>
                </td>
              <td>Tipo</td>
              <td>{p.type}</td>
              <td>Conectividad</td>
              <td>{p.connectivity}</td>
              <td>Duración de batería</td>
              <td>{p.battery}</td>
            </tr>
          ))
        ) : (
          <>
            <tr>
              <td>Tipo</td>
              {products.map((p) => <td key={p.id}>{p.type}</td>)}
            </tr>
            <tr>
              <td>Conectividad</td>
              {products.map((p) => <td key={p.id}>{p.connectivity}</td>)}
            </tr>
            <tr>
              <td>Duración de batería</td>
              {products.map((p) => <td key={p.id}>{p.battery}</td>)}
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};
