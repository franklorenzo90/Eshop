import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { url } from "../utils/url";

// My Components
import Card from "./Card";
import FlashMessage from "./FlashMessage";

// Hooks
import useFetch from "../custom-hooks/useFetch";
import { useCart } from "../custom-hooks/useCart";

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const { buy } = useCart();
  const productByCat = useFetch(url.productByCategory + category);

  const { show, Alert } = FlashMessage();

  useEffect(() => {
    if (productByCat) setIsLoading(false);
  });

  if (isLoading) return <Loading />;

  const renderButton = (product) => {
    return (
      <button
        className="btn border-warning link borderless btn-lg"
        onClick={() => {
          buy(product);
          show("Product has been added to your cart");
        }}
      >
        <i className="fas fa-cart-plus me-2"></i>
        Add to cart
      </button>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <h1 className="text text-center text-capitalize">
            {category} products
          </h1>
        </div>
        <div className="col-sm-4">{Alert()}</div>
      </div>
      <div className="mt-5">
        {productByCat.map((product) => (
          <div className="row mt-5" key={product.id}>
            <Card
              srcImage={product.image}
              key={product.id}
              product={product}
              render={renderButton(product)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
