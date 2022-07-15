import "@styles/components/ProductsContainer.scss"

const ProductsContainer = ({ children, className }) => {
  return (
    <div className={`products-container ${className} `} >
      {children}
    </div>
  );
}

export default ProductsContainer;