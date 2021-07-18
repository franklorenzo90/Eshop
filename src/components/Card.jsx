import React from "react";
import { Link } from "react-router-dom";

function Card({
  srcImage,
  category,
  product = null,
  description,
  render = null,
}) {
  // Product card
  if (product)
    return (
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={srcImage}
              className="img-fluid rounded-start mt-5 mx-5"
              alt="..."
              style={{ maxHeight: "50%", maxWidth: "50%" }}
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text">{product.title}</h5>
              <div className="card-text text-secondary fw-light">
                <span className="truncate">{product.description}</span>
              </div>
              <div className="card-text text-secondary">
                <span className="text-muted fw-bold">Price:</span>{" "}
                {` $${product.price}`}
              </div>
              <div className="mt-5">{render}</div>
            </div>
          </div>
        </div>
      </div>
    );

  // Category card
  return (
    <Link
      className="card link shadow"
      style={{ width: "22rem" }}
      to={`/${category.toLowerCase()}/products`}
    >
      <img src={srcImage} className="card-img-top" alt={`${category}`} />
      <div className="card-body">
        <p className="card-text text-center text-bolder">{category}</p>
        <p className="text-center text-secondary fw-light">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
