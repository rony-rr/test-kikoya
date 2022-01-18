import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import CartItem from "./CartItem";

const Cart = ({ items, total, currency, removeFromCart }) => {
  return (
    <div>
      <h3>Shopping Cart</h3>

      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart__body">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}
            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            <div className="cart__total">
              Total: {total.toFixed(2)} {currency}
            </div>
            {total > 0 && (
              <div className="cart__total">
                IVA: {(total * 0.16).toFixed(2)} {currency}
              </div>
            )}
            {total > 0 && (
              <div className="cart__total">
                Total con IVA: {(total + total * 0.16).toFixed(2)} {currency}
              </div>
            )}
            {total > 0 && window.location.pathname !== "/payment" && (
              <div className="buy--btn">
                <span>
                  <NavLink
                    to={{
                      pathname: "/payment",
                      aboutProps: {
                        total,
                        items,
                        currency,
                      },
                    }}
                    exact
                  >
                    Comprar
                  </NavLink>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
