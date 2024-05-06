import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();

  //carregar dado individual
  const url = "http://localhost:3000/products/"+id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <div>
      Product
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro: {error}</p>}
      {loading && <p>Carregando</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          
          <Link to={`/products/${product.id}/info`}>Mais info</Link>
          
        </div>
      )}
    </div>
  );
};

export default Product;
