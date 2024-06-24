import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import '../App'; 

function Carrito() {
  const { carrito, eliminarCarrito } = useContext(PizzaContext);

  const totalMonto = carrito.reduce((acc, item) => acc + item.cantidad * item.price, 0);

  return (
    <div className="container">
      <h1>Carrito de Compras</h1>

      {carrito.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        <div className="cart-container">
          {carrito.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="cart-item-content">
                <h3>{item.name}</h3>
                <p className="price">Precio: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.cantidad}</p>
                <p className="subtotal">Subtotal: ${(item.price * item.cantidad).toFixed(2)}</p>
              </div>
              <button onClick={() => eliminarCarrito(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            Total: <span>${totalMonto.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;

