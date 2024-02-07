import React from "react";
import "./portfolio.css";
import { FaStar } from "react-icons/fa";
import Product from "../Product/Product";

// images link from unsplash
const products = [
  {
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1621757458931-a1b076e5a8bb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1570727624862-3008fe67a6be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1618427010844-7c779c47fa6e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1568027867737-cedfbcb5e98a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="text-center mb-2">
          <h2>PORTFOLIO COMPONENT</h2>
          <div>
            <span className="line bg-dark"></span>
            <span className="text-dark">
              <FaStar />
            </span>
            <span className="line bg-dark "></span>
          </div>
        </div>

        <div className="data row ">
          {products.map((product, index) => (
            <Product key={index} imgUrl={product.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
