import React from "react";

import { useCart } from "../custom-hooks/useCart";
import FlashMessage from "./FlashMessage";

function CartView() {
  const { cart, deleteFromList, totalPrice, quantity, pay } = useCart();
  const { show, Alert } = FlashMessage();

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <div className="row">
            <div className="col-sm-8">
              <h1 className="text text-center mt-5">Shopping list</h1>
            </div>
            <div className="col-sm-4">{Alert()}</div>
          </div>
          <table className="table table-borderless mt-5">
            <thead className="text">
              <tr>
                <th>Product</th>
                <th className="text-center">Category</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              {cart.map((p) => (
                <tr key={p.product.id}>
                  <td>{p.product.title}</td>
                  <td className="text-center text-capitalize">
                    {p.product.category}
                  </td>
                  <td className="text-center">{p.quantity}</td>
                  <td className="text-center">{p.product.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() => {
                        pay(p);
                        show("Product has been payed");
                      }}
                      className="btn btn-outline-warning btn-sm me-3 borderless"
                    >
                      <i className="far fa-money-bill-alt me-2"></i>
                      Pay
                    </button>

                    <button
                      onClick={() => {
                        deleteFromList(p);
                        show("Product has been removed from your cart");
                      }}
                      className="btn btn-outline-warning btn-sm borderless"
                    >
                      <i className="far fa-trash-alt me-2"></i>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="text">
                <th colSpan="2">Total</th>
                <th className="text-center">{quantity()}</th>
                <th className="text-center">{totalPrice()}</th>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text text-center mt-5">
          <i className="far fa-sad-tear me-2"></i>Your cart is empty
        </h2>
      )}
    </>
  );
}

export default CartView;
