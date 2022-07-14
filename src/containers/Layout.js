import Header from "@components/Header";
import "@styles/containers/Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;