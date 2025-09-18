import OrderItem from "../OrderItem/OrderItem";
import './OrderList.css'

const OrderList = ({ orders }) => {
  if (orders.length === 0) {
    return <p className="text-gray-500">No hay pedidos.</p>;
  }

  return (
    <div className="grid gap-4">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
