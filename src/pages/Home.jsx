import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import '../App'; 

function Home() {
  const { pizzas, carrito, agregarCarrito, eliminarCarrito } = useContext(PizzaContext);

  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalMonto = carrito.reduce((acc, item) => acc + item.cantidad * item.price, 0);

  return (
    <div className="container">
      <nav>
        Pizeria GIO - CARRITO: {totalCantidad} - TOTAL: ${totalMonto.toFixed(2)}
      </nav>

      <div className="grid">
        {pizzas.map((e) => (
          <div className="pizza-card" key={e.id}>
            <img src={e.img} alt={e.name} />
            <div className="pizza-card-content">
              <h2>{e.name}</h2>
              <p className="price">${e.price.toFixed(2)}</p>
              <p className="description">{e.desc}</p>
              <div className="button-group">
                <button onClick={() => agregarCarrito(e)}>Agregar Al Carrito</button>
                <button onClick={() => eliminarCarrito(e.id)}>Eliminar Del Carrito</button>
                <Link to={`/detallepizza/${e.id}`}>
                  <button>Detalle Pizza</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {carrito.length === 0 && <p>No hay pizzas en el carrito.</p>}

      <footer>Derechos Reservados</footer>
    </div>
  );
}

export default Home;


