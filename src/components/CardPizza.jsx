import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card shadow" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">
          <strong>Ingredientes:</strong> {ingredients.join(", ")}
        </p>

        <p className="fw-bold">Precio: ${price}</p>

        <button className="btn btn-danger w-100" onClick={() => addToCart({ id, name, price, img })}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
