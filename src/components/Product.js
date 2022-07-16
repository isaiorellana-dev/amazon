import "@styles/components/Product.scss"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
import location from "@icons/location-black.png"

const Product = ({ image, title, price, rate, count, id, detail, description }) => {
  return !detail ? (
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
  ) : (
    <article className="detail">
      <img src={image} alt={title}></img>
      <div className="detail__center">
        <p className="detail__center--title">
          {title}
        </p><div className="detail__center--rating">
          <Rating
            name="half-rating-read"
            defaultValue={rate}
            precision={0.2}
            readOnly
            size="large"
          ></Rating>
          <span>{count} calificaciones</span>
        </div>
        <p className="detail__center--price">{price} $</p>
        <p>{description}</p>
      </div><div className="detail__right" >
        <p className="detail__right--price">{price} $</p>
        <p>+ US$ de deposito de derechos de importación & <b>envió GRATIS</b> a Colombia</p>
        <a>Detalles ▼</a>
        <p>Este articulo se envió a <b>Colombia</b>. Llega: <b>martes, sept, 14</b></p>
        <div className="detail__right--location">
          <img src={location} alt="Enviar a Colombia" ></img>
          <p>Enviar a Colombia</p>
        </div>
        <p className="detail__right--stock" >Disponible</p>
        <select >
          <option defaultValue="selected" >Cantidad: 1</option>
          <option >Cantidad: 1</option>
          <option >Cantidad: 2</option>
          <option >Cantidad: 3</option>
          <option >Cantidad: 4</option>
          <option >Cantidad: 5</option>
        </select>
        <div className="detail__right--buttons">
          <button>Agregar al Carrito</button>
          <button>Comprar ahora</button>
        </div>
      </div>

    </article>
  )
}

export default Product
