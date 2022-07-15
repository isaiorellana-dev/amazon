import "@styles/components/Product.scss"
import { Rating } from '@mui/material';
import { Link } from "react-router-dom";

const Product = ({ image, title, price, rate, count, id }) => {
  return (
    <article className="product" >
      <Link to={`/detail/${id}`} className="product__image-container" >
        <img src={image} alt={title} ></img>
      </Link>
      <p className="product__price" >{price} $</p>
      <a className="product__title" >{title}</a>
      <div className="product__rating">
        <Rating name="half-rating-read" defaultValue={rate} precision={0.2} readOnly size="large" ></Rating>
        <span>{count}</span>
      </div>
      <a className="product__button">Ver oferta</a>
    </article>
  );
}

export default Product;