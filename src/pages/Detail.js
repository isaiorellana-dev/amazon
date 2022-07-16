import Product from "@components/Product"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AppContext from "@context/AppContext.js"
import "@styles/pages/Detail.scss"

const Detail = () => {
  const { id } = useParams()
  const { products } = useContext(AppContext)
  const productToShow = products.filter(e => e.id == id)

  return (
    <section className="detail-page">
      <Product
        title={productToShow[0].title}
        price={productToShow[0].price}
        image={productToShow[0].image}
        description={productToShow[0].description}
        rate={productToShow[0].rating.rate}
        count={productToShow[0].rating.count}
        detail={true}
      />
    </section>
  );
}

export default Detail;