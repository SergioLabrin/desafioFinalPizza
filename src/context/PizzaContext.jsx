import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export default function PizzaProvider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  async function getPizzas() {
    try {
      const response = await fetch("/pizzas.json");
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  }

  useEffect(() => {
    getPizzas();
  }, []);

  function agregarCarrito(pizza) {
    const producto = { ...pizza, cantidad: 1 };
    const indicePizzas = carrito.findIndex((pedido) => pedido.id === pizza.id);

    if (indicePizzas >= 0) {
      const nuevoCarrito = carrito.map((pedido, index) =>
        index === indicePizzas ? { ...pedido, cantidad: pedido.cantidad + 1 } : pedido
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, producto]);
    }
  }

  function eliminarCarrito(id) {
    const indicePizzas = carrito.findIndex((pedido) => pedido.id === id);

    if (indicePizzas >= 0) {
      const nuevoCarrito = carrito[indicePizzas].cantidad > 1
        ? carrito.map((pedido, index) =>
            index === indicePizzas ? { ...pedido, cantidad: pedido.cantidad - 1 } : pedido
          )
        : carrito.filter((pedido) => pedido.id !== id);
      
      setCarrito(nuevoCarrito);
    }
  }

  return (
    <PizzaContext.Provider value={{ pizzas, setPizzas, carrito, setCarrito, agregarCarrito, eliminarCarrito }}>
      {children}
    </PizzaContext.Provider>
  );
}
