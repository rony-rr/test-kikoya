import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";

/** Import Components */
import Cart from "../../containers/Cart";
import ProductList from "../../containers/ProductList";

import { UserContext } from "../../Context/UserContext";

/** Import CSS */
import "../../Scss/_buy.scss";

const Buy = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Virtual Shop</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>

        <footer>
          <small>
            powered by <a href="http://www.kikoya.mx/">Kikoya</a>
          </small>
        </footer>
      </div>

      <div className="floating--close">
        <span
          onClick={() => {
            setUser(null);
          }}
        >
          Cerrar Sesión
        </span>
      </div>
    </div>
  );
};

export default Buy;
