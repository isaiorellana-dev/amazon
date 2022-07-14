import PageTitle from "@components/PageTitle";
import ProductsContainer from "@components/ProductsContainer";


const Home = () => {
  return (
    <>
      <PageTitle />
      <section className="products-feed">
        <ProductsContainer />
      </section>
    </>
  );
}

export default Home;