import logo from "@img/amazon-logo.png"
import cart from "@icons/cart.png"
import location from "@icons/location.png"
import menu from "@icons/menu.png"
import usa from "@img/usa.png"
import search from "@icons/search.png"
import "@styles/components/Header.scss"


const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="header-top__left-side">
          <img src={logo} alt="Amazon logo" className="header-top__left-side--logo" ></img>
          <div className="header-top__left-side--location">
            <img src={location} alt="Ubicación" ></img>
            <div>
              <p>Enviar a</p>
              <p>Colombia</p>
            </div>
          </div>
        </div>
        <div className="header-top__center">
          <select>
            <option selected="selected" >Ofertas</option>
            <option >Arte y artesanías</option>
            <option >Automotriz</option>
            <option >Bebé</option>
            <option >Belleza y cuidado personal</option>
            <option >Cine y TV</option>
            <option >Computadoras</option>
            <option >Deportes y actividades al aire libre</option>
            <option >Electrónicos</option>
            <option >Equipaje</option>
            <option >Herramientas y mejoramiento del hogar</option>
            <option >Hogar y cocina</option>
            <option >Industrial y científico</option>
            <option >Insumos para mascotas</option>
            <option >Juguetes y juegos</option>
            <option >Libros</option>
            <option >Moda de niñas</option>
            <option >Moda de niños</option>
            <option >Moda para Hombre</option>
            <option >Moda para Mujer</option>
            <option >Música MP3</option>
            <option >Música, CD y vinilos</option>
            <option >Ofertas</option>
            <option >Prime Video</option>
            <option >Salud y productos para el hogar</option>
            <option >Software</option>
            <option >Tienda Kindle</option>
            <option >Videojuegos</option>
          </select>
          <input></input>
          <button><img src={search} alt="buscar boton" ></img></button>
        </div>
        <div className="header-top__right-side">
          <div className="header-top__right-side--language">
            <img src={usa}></img><span>▼</span>
          </div>
          <div className="header-top__right-side--account">
            <p>Hola, Identifícate</p>
            <p>Cuenta y Listas<span>▼</span></p>
          </div>
          <div className="header-top__right-side--orders">
            <p>Devoluciones</p>
            <p>y Pedidos</p>
          </div>
          <div className="header-top__right-side--cart">
            <div>
              <img src={cart} ></img>
              <p>0</p>
            </div>
            <p>Carrito</p>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom__left-side">
          <div>
            <img src={menu} alt="menu"></img>
            <p>Todo</p>
          </div>
          <ul>
            <li>Ofertas del Día</li>
            <li>Servicio al Cliente</li>
            <li>Listas</li>
            <li>Tarjetas de Regalo</li>
            <li>Vender</li>
          </ul>
        </div>
        <div className="header-bottom__right-side">
          <a>Comprar por categorías principales</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
