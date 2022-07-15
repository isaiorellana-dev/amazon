import ProductsContainer from "../components/ProductsContainer";
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from "../components/Product";
const Searched = () => {
  const { filteredProducts } = useContext(AppContext)
  return (
    <section >
      <p>Se encontraron {filteredProducts.length} resultados</p>
      <ProductsContainer className="products-container-center" >
        {filteredProducts.map(e => (
          <Product
            key={e.id}
            title={e.title}
            price={e.price}
            image={e.image}
            rate={e.rating.rate}
            count={e.rating.count}
          />
        ))}
      </ProductsContainer>
    </section>
  );
}

export default Searched;