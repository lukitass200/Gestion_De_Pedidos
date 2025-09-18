import { useState } from "react";
import OrderFilter from "../Orderfilter/OrderFilter";
import OrderList from "../OrderList/OrderList";
import OrderStats from "../OrderStats/OrderStats";
import OrderForm from "../OrderForm/OrderForm";
import './Dashboard.css'

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-blue-600">📦 Gestión de Pedidos</h1>
      
      <OrderFilter selectedStatus={filter} onChange={setFilter} />
      <OrderStats orders={orders} />
      <OrderList orders={filteredOrders} />
      <OrderForm onAddOrder={addOrder} />
    </div>
  );
};

export default Dashboard;
