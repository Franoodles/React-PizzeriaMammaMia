import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increase, decrease, total, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 👉 Simulación local del pago (checkout) sin depender del backend
  const handleCheckout = async () => {
    if (!token) {
      setMessage("❌ Debes iniciar sesión para comprar.");
      return;
    }

    try {
      // Simulamos un pequeño retraso de red (como si fuera una petición real)
      setMessage("Procesando pago...");
      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 🟢 COMPRA EXITOSA SIMULADA
      setMessage("✅ ¡Compra realizada con éxito! Gracias por tu pedido.");

      // 🟢 VACIAR CARRITO DESPUÉS DE PAGAR
      clearCart();

      // 🟢 REDIRIGIR AL HOME DESPUÉS DE DOS SEGUNDOS
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      setMessage("❌ Error al procesar el pago: " + err.message);
    }
  };

  return (
    <div className="container mt-5 pb-5">
      <h2>🛒 Carrito de compras</h2>

      {cart.length === 0 ? (
        <p className="mt-3">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((p) => (
            <div
              key={p.id}
              className="d-flex justify-content-between align-items-center border p-3 mb-2 rounded bg-white shadow-sm"
            >
              <div className="d-flex align-items-center gap-3">
                <img src={p.img} alt={p.name} width="80" className="rounded" />
                <h5>{p.name}</h5>
              </div>

              <div className="d-flex align-items-center gap-3">
                <p className="fw-bold mb-0">${p.price * p.quantity}</p>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => decrease(p.id)}
                >
                  -
                </button>

                <span>{p.quantity}</span>

                <button
                  className="btn btn-outline-success"
                  onClick={() => increase(p.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <h4 className="mt-3">Total: ${total}</h4>

          <button className="btn btn-danger mt-3" onClick={handleCheckout}>
            Pagar
          </button>
        </>
      )}

      {message && <p className="mt-3 text-center fw-bold">{message}</p>}
    </div>
  );
};

export default Cart;