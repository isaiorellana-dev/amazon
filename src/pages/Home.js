import PageTitle from "@components/PageTitle";
import ProductsContainer from "@components/ProductsContainer";
import DepartmentsFilter from "@components/DepartmentsFilter";
import "@styles/pages/Home.scss"
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from "../components/Product";

const Home = () => {
  const { products, filteredCategories } = useContext(AppContext)
  return (
    <>
      <PageTitle />
      <section className="products-feed">
        <DepartmentsFilter />
        <ProductsContainer >
          {filteredCategories.length > 1 ? (
            filteredCategories.map(e => (
              <Product
                id={e.id}
                key={e.id}
                title={e.title}
                price={e.price}
                image={e.image}
                rate={e.rating.rate}
                count={e.rating.count}
              />
            ))
          ) : (products.map(e => (
            <Product
              id={e.id}
              key={e.id}
              title={e.title}
              price={e.price}
              image={e.image}
              rate={e.rating.rate}
              count={e.rating.count}
            />
          )))}
        </ProductsContainer>
      </section>
    </>
  );
}

export default Home;