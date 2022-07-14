import "@styles/components/Product.scss"
import { Rating } from '@mui/material';

const Product = ({ image, title, price, rate, count }) => {
  return (
    <article className="product" >
      <a className="product__image-container" >
        <img src={image} alt={title} ></img>
      </a>
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