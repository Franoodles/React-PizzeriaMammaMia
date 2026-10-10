import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// 👇 Importamos el CartProvider correcto
import { CartProvider } from "./context/CartProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 Envolvemos toda la app dentro del provider */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
