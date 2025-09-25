import OrderItem from "../OrderItem/OrderItem";
import './OrderList.css';

const OrderList = ({ orders }) => {
  if (orders.length === 0) {
    return <p className="order-list__empty">No hay pedidos.</p>;
  }

  return (
    <div className="order-list">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
