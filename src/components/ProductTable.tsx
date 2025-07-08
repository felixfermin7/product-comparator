import type { Product } from '../types/Product';

interface Props {
  products: Product[];
}

export const ProductTable: React.FC<Props> = ({ products }) => {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>Especificación</th>
          {products.map((p) => (
            <th key={p.id}><img src={p.image} width="50" /></th>
          ))}
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};
