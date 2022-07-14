import PageTitle from "@components/PageTitle";
import ProductsContainer from "@components/ProductsContainer";
import DepartmentsFilter from "@components/DepartmentsFilter";
import "@styles/pages/Home.scss"

const Home = () => {
  return (
    <>
      <PageTitle />
      <section className="products-feed">
        <DepartmentsFilter />
        <ProductsContainer />
      </section>
    </>
  );
}

export default Home;