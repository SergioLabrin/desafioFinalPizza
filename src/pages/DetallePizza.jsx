import React, { useContext } from "react";
import { useParams,Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import '../App'

function DetallePizza() {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <p>Pizza no encontrada</p>;
  }

  return (
    <div className="detail-container">
      <h1>{pizza.name}</h1>
      <img style={{ width: "300px" }} src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <Link to="/" className="back-button">Volver</Link>
    </div>
  );
}

export default DetallePizza;
