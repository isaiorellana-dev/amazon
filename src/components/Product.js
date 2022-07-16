import "@styles/components/Product.scss"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
import location from "@icons/location-black.png"

const Product = ({ image, title, price, rate, count, id }) => {
  return (
    <article className="product">
      <Link to={`/detail/${id}`} className="product__image-container">
        <img src={image} alt={title}></img>
      </Link>
      <p className="product__price">{price} $</p>
      <Link to={`/detail/${id}`} className="product__title">
        {title}
      </Link>
      <div className="product__rating">
        <Rating
          name="half-rating-read"
          defaultValue={rate}
          precision={0.2}
          readOnly
          size="large"
        ></Rating>
        <span>{count}</span>
      </div>
      <Link to={`/detail/${id}`} className="product__button">
        Ver oferta
      </Link>
    </article>
  )
}

export default Product
