import React, { useEffect, useState } from "react";

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);

// //   let url = "https://crudcrud.com/api/cdea8a0bfeed403d89abd2b54aef5162";
// //   const getData = async () => {
// //     try {
// //       const response = await fetch(`${url}/Pathan`);

// //       const data = await response.json();
//       CartCtx.addProduct(data)
//       setData(data);
// //       console.log(data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const postData = async (products) => {
// //     try {
// //       const response = await fetch(`${url}/Pathan`, {
// //         method: "POST",
// //         body: JSON.stringify(products),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       getData();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const postCartData = async (cartData) => {
// //     try {
// //       const response = await fetch(`${url}/numair`, {
// //         method: "POST",
// //         body: JSON.stringify(cartData),
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       });
// //       getCartData();
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   const getCartData = async () => {
// //     try {
// //       const response = await fetch(`${url}/numair`);
// //       const data = await response.json();
// //       setCartData(data);
// //       console.log(cartData, "numair");
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

  const addProductHandler = (products) => {
    setData(products);
  };
  const addToCartHandler = (newData) => {
    setCartData([...cartData, newData])
    // postCartData(newData);
  };

//   useEffect(() => {
//     getData();
//     getCartData();
//   }, []);

  const contextValue = {
    productStore: data,
    addProduct: addProductHandler,
    cartStore: cartData,

    addToCart: addToCartHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
