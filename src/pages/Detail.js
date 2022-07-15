import Product from "@components/Product"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "@context/AppContext.js"

const Detail = () => {
  const { id } = useParams()
  const { products } = useContext(AppContext)
  const productToShow = products.filter(e => e.id == id)

  return (
    <>
      <h1>Details</h1>
      <Product
        title={productToShow[0].title}
        price={productToShow[0].price}
        image={productToShow[0].image}
        rate={productToShow[0].rating.rate}
        count={productToShow[0].rating.count}
      />
    </>
  );
}

export default Detail;