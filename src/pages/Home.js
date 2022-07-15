import PageTitle from "@components/PageTitle";
import ProductsContainer from "@components/ProductsContainer";
import DepartmentsFilter from "@components/DepartmentsFilter";
import "@styles/pages/Home.scss"
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from "../components/Product";

const Home = () => {
  const { products } = useContext(AppContext)
  return (
    <>
      <PageTitle />
      <section className="products-feed">
        <DepartmentsFilter />
        <ProductsContainer >
          {products.map(e => (
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
    </>
  );
}

export default Home;