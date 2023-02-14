import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import ReactStars from "react-rating-stars-component"
const Product = ({ product }) => {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
      };

  return (
    <NavLink to={`/product/${product._id}`}>
      <div className="card">
        <figure>
          <img src={product.images[0].url} alt={product.name} />
          <figcaption className="caption">{product.category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{product.name}</h3>
            <p className="card-data--price">({product.numOfReviews} Reviews)</p>
            <p className="card-data--price">{<FormatPrice price={product.price} />}</p>
            <ReactStars {...options} />{" "}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;