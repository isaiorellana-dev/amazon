const Product = ({ image, title, price }) => {
  return (
    <article  >
      <img src={image} alt={title} ></img>
      <p>{title}</p>
      <p>{price} $</p>
      <button>Ver Oferta</button>
    </article>
  );
}

export default Product;