import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Lista local de pizzas actualizada con Veggie, Tocino-Carnes y Hawaiana
  const pizzasLocales = [
    {
      id: "p001",
      name: "Napolitana",
      desc: "Una deliciosa pizza clásica con tomate, mozzarella y un toque de albahaca fresca.",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500"
    },
    {
      id: "p002",
      name: "Española",
      desc: "Combinación perfecta de quesos intensos y un gran sabor tradicional.",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500"
    },
    {
      id: "p003",
      name: "Pepperoni",
      desc: "La favorita de todos, crujiente pepperoni y abundante queso mozzarella fundido.",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500"
    },
    {
      id: "p004",
      name: "Pizza Veggie",
      desc: "Una opción fresca y saludable cargada con vegetales de la huerta y queso fundido.",
      price: 6500,
      ingredients: ["mozzarella", "champiñones", "pimentón", "aceitunas", "cebolla"],
      img: "https://plus.unsplash.com/premium_photo-1690056321981-dfe9e75e0247?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
      id: "p005",
      name: "Pizza Tocino-Carnes",
      desc: "Para los verdaderos amantes de la carne: abundante tocino crujiente, carne y jamón.",
      price: 7900,
      ingredients: ["mozzarella", "tocino", "carne picada", "jamón ahumado"],
      img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=500"
    },
    {
      id: "p006",
      name: "Pizza Hawaiana",
      desc: "La polémica y deliciosa combinación agridulce de jugoso jamón y trozos de piña.",
      price: 6700,
      ingredients: ["mozzarella", "jamón", "piña", "orégano"],
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500"
    }
  ];

  // Buscamos la pizza que coincida con el ID de la URL, o mostramos la primera por defecto si no la encuentra
  const pizzaEncontrada = pizzasLocales.find((p) => p.id === id) || pizzasLocales[0];

  const [pizza] = useState(pizzaEncontrada);

  if (!pizza) return <p className="text-center mt-5">Cargando...</p>;

  return (
    <div className="container mt-4 pb-5">
      <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
        <img src={pizza.img} width="350" alt={pizza.name} className="rounded shadow" />

        <div>
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <h3 className="mt-3">Precio: ${pizza.price}</h3>

          <button
            className="btn btn-danger mt-3"
            onClick={() =>
              addToCart({
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                img: pizza.img,
              })
            }
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;