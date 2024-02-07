import React, { useState } from "react";
import "./product.css";

function Product(props) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="product col-lg-4 col-md-6">
      <div className="product-img rounded-3" onClick={() => setIsShow(true)}>
        <img src={props.imgUrl} alt="Delicious Donuts" />
        <span>+</span>
      </div>

      {isShow && (
        <div className="d-flex align-content-center  justify-content-center">
          <div className="backdrop" onClick={() => setIsShow(false)}></div>

          <div className="big-image">
            <img src={props.imgUrl} alt="Delicious Donuts" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
