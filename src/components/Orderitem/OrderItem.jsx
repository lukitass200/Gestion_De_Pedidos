import Card from "../UI/Card/Card";
import './Orderitem.css'

const OrderItem = ({ order }) => {
  if (!order.customer || order.customer.length < 3) {
    return <p className="text-red-500">❌ Cliente inválido</p>;
  }

  return (
    <Card>
      <h3 className="font-bold">Pedido #{order.id}</h3>
      <p>Cliente: {order.customer}</p>
      <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
      <p>Estado: <span className="font-semibold">{order.status}</span></p>
      <h4 className="mt-2 font-medium">Productos:</h4>
      <ul className="list-disc pl-6">
        {order.products.map((p, i) =>
          p.quantity > 0 ? (
            <li key={i}>
              {p.name} - {p.quantity} x ${p.price}
            </li>
          ) : (
            <li key={i} className="text-red-500">❌ Cantidad inválida</li>
          )
        )}
      </ul>
    </Card>
  );
};

export default OrderItem;
