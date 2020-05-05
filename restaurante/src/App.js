import axios from "axios";
import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import "./App.css";
import Card from "./components/molecules/Card";
import CardCart from "./components/molecules/CardCart";
import Dashboard from "./components/organisms/Dashboard";
import ShoppingCart from "./components/organisms/ShoppingCart";
const url = process.env.REACT_APP_HOST_IP_ADDRESS;
const port = process.env.REACT_APP_HOST_PORT;

function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get(`${url}:${port}/api/v1/products/`).then((prods) => {
      setProducts(prods.data);
    });
  }, []);

  useEffect(() => {
    const socket = socketIOClient(`${url}:${port}`);
    socket.on("kitchen", (msg) => {
      console.log(msg);
      refreshOrders();
    });
    return () => {
      socket.close();
    };
  }, []);

  const refreshOrders = () => {
    axios.get(`${url}:${port}/api/v1/orders/`).then((ods) => {
      setOrders(ods.data);
    });
  };

  const pedir = (product) => {
    axios.post(`${url}:${port}/api/v1/orders/${product._id}`).then((order) => {
      setOrders([...orders, order.data]);
    });
    calculaTotal(product.value);
  };

  const cancelarPedido = (index) => {
    if (index.status === "NA_FILA") {
      axios
        .delete(`${url}:${port}/api/v1/orders/${index._id}`)
        .then((order) => {
          setOrders(orders.filter((order) => order._id !== index._id));
        });
      setTotal(total - index.value);
    } else {
      alert("Impossivel cancelar pedido");
    }
  };

  const calculaTotal = (obj) => {
    setTotal(total + obj);
  };

  const renderProduct = () => {
    return products.map((product) => {
      return (
        <Card
          key={product._id}
          name={product.name}
          type={product.type}
          value={product.value}
          photo={product.photo}
          funcao={() => pedir(product)}
        >
          Pedir
        </Card>
      );
    });
  };

  const renderOrder = () => {
    return orders.map((order) => {
      return (
        <CardCart
          key={order._id}
          name={order.name}
          type={order.type}
          value={order.value}
          status={order.status}
          photo={order.photo}
          funcao={() => cancelarPedido(order)}
        >
          Cancelar
        </CardCart>
      );
    });
  };

  return (
    <>
      <ShoppingCart total={total}>{() => renderOrder()}</ShoppingCart>
      <Dashboard>{renderProduct()}</Dashboard>;
    </>
  );
}

export default App;
