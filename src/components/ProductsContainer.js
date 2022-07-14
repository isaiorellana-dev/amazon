import { useEffect, useState } from 'react';
const axios = require('axios').default;
import "@styles/components/ProductsContainer.scss"
import Product from './Product';

const ProductsContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
  }, [])

  return (
    <div className="products-container" >
      {products.map(e => (
        <Product
          key={e.id}
          title={e.title}
          price={e.price}
          image={e.image}
        />
      ))}
    </div>
  );
}

export default ProductsContainer;