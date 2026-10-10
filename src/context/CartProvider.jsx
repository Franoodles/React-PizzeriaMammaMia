import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar al carrito
  const addToCart = (pizza) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === pizza.id);

      if (exists) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, { ...pizza, quantity: 1 }];
    });
  };

  // Aumentar cantidad
  const increase = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // Disminuir cantidad
  const decrease = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  // Total
  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
