import React, { useContext, useState } from "react";
// import Button from "react-bootstrap/Button";
import Cart from "./Cart";
import CartContext from "./CartContext";

const ProductList = () => {
  const CartCtx = useContext(CartContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const largeChangeHandler = (e) => {
    setLarge(e.target.value);
  };
  const mediumChangeHandler = (e) => {
    setMedium(e.target.value);
  };
  const smallChangeHandler = (e) => {
    setSmall(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const products = {
      productName: name,
      description: description,
      price: price,
      large: large,
      small: small,
      medium: medium,
    };
    CartCtx.addProduct(products);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Product name</label>
          <input
            type="text"
            required
            onChange={nameChangeHandler}
            value={name}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            required
            onChange={descriptionChangeHandler}
            value={description}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            required
            onChange={priceChangeHandler}
            value={price}
          ></input>
        </div>
        <div>
          <label>Large</label>
          <input
            type="number"
            required
            onChange={largeChangeHandler}
            value={large}
          ></input>
        </div>
        <div>
          <label>Medium</label>
          <input
            type="number"
            required
            onChange={mediumChangeHandler}
            value={medium}
          ></input>
        </div>
        <div>
          <label>Small</label>
          <input
            type="number"
            required
            onChange={smallChangeHandler}
            value={small}
          ></input>
        </div>
        <div>
          <button type="submit" variant="info">
            Add Product
          </button>
        </div>
        <Cart />
      </form>
    </div>
  );
};
export default ProductList;
