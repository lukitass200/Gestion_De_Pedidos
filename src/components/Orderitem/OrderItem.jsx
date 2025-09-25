import Card from "../UI/Card/Card";
import './OrderItem.css';

const OrderItem = ({ order }) => {
  if (!order.customer || order.customer.length < 3) {
    return <p className="order-item error">❌ Cliente inválido</p>;
  }

  return (
    <Card>
      <div className="order-item">
        <h3>Pedido #{order.id}</h3>
        <p>Cliente: {order.customer}</p>
        <p>Fecha: {new Date(order.date).toLocaleDateString()}</p>
        <p>
          Estado: <span>{order.status}</span>
        </p>
        <h4>Productos:</h4>
        <ul>
          {order.products.map((p, i) =>
            p.quantity > 0 ? (
              <li key={i}>
                {p.name} - Cantidad: {p.quantity || "Cantidad"}, Precio:{" "}
                {p.price ? `$${p.price}` : "Precio"}
              </li>
            ) : (
              <li key={i} className="error">
                {p.name} - Cantidad: {p.quantity || "Cantidad"}, Precio:{" "}
                {p.price ? `$${p.price}` : "Precio"} ❌ Cantidad inválida
              </li>
            )
          )}
        </ul>
      </div>
    </Card>
  );
};

export default OrderItem;
