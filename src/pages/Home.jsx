import { useState, useEffect, useContext } from "react";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";

// Componente Header integrado directamente
const Header = () => {
  return (
    <header
      className="text-center text-light py-5 d-flex flex-column justify-content-center align-items-center w-100 mb-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      <h1 className="fw-bold">Pizzería Mamma Mía!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  // Lista local de pizzas actualizada con las mismas variedades de Pizza.jsx
  const pizzasLocales = [
    {
      id: "p001",
      name: "Pizza Napolitana",
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

  useEffect(() => {
    // Asignamos directamente los datos locales
    setPizzas(pizzasLocales);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center pb-5">
      {/* 🟢 Renderizamos el Header arriba del todo */}
      <Header />

      {/* Contenedor de las tarjetas de pizza */}
      <div className="container d-flex justify-content-center flex-wrap gap-4">
        {pizzas.length === 0 ? (
          <p>Cargando pizzas...</p>
        ) : (
          pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
              handleAddToCart={() => addToCart(pizza)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;