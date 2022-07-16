import ProductsContainer from "../components/ProductsContainer"
import { useContext } from "react"
import AppContext from "../context/AppContext"
import Product from "../components/Product"
const Searched = () => {
  const { searchState } = useContext(AppContext)
  return (
    <section>
      <p>Se encontraron {searchState.length} resultados</p>
      <ProductsContainer className="products-container-center">
        {searchState.map((e) => (
          <Product
            id={e.id}
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
  )
}

export default Searched
