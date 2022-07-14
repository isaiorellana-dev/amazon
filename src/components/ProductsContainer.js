import { useEffect, useState } from 'react';
const axios = require('axios').default;
import "@styles/components/ProductsContainer.scss"


const ProductsContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
      })
  }, [])


  console.log(products)

  return (
    <div className="products-container" >
      {products.map(e => (
        <article key={e.id} >
          <img src={e.image} alt={e.title} ></img>
          <p>{e.title}</p>
          <p>{e.price} $</p>
          <button>Ver Oferta</button>
        </article>
      ))}
    </div>
  );
}

export default ProductsContainer;