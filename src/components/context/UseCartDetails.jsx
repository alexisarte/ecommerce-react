import React, { createContext, useState } from 'react';

export const useCartDetails = createContext();

export default (props) => {
  const [cartProduct, setCartProduct] = useState([]);

  const addCartProduct = (product) => {
    if (cartProduct.length === 0) {
      return setCartProduct([...cartProduct, product]);
    }
    setCartProduct(
      cartProduct.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      }),
    );
  };

  const removeCartProduct = (id) => {
    setCartProduct(cartProduct.filter((item) => item.id !== id));
  };

  const totalQuantityProduct = cartProduct.reduce(
    (accumulator, current) => accumulator + current.quantity,
    0
  );

  return (
    <useCartDetails.Provider
      value={{
        cartProduct,
        addCartProduct,
        removeCartProduct,
        totalQuantityProduct,
      }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
