import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderProducts = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  if(products.length < 1) {
      return <div style={{marginTop: '100px'}}>....loading</div>
  }
  return <>{renderProducts}</>;
};

export default ProductComponents;
