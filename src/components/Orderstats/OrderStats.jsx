import Card from "../UI/Card/Card";
import './OrderStats.css';

const OrderStats = ({ orders }) => {
  const total = orders.length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const shipped = orders.filter((o) => o.status === "shipped").length;
  const delivered = orders.filter((o) => o.status === "delivered").length;

  return (
    <Card>
      <div className="order-stats">
        <h3>📊 Estadísticas</h3>
        <p className="total">Total pedidos: {total}</p>
        <p className="pending">Pendientes: {pending}</p>
        <p className="shipped">Enviados: {shipped}</p>
        <p className="delivered">Entregados: {delivered}</p>
      </div>
    </Card>
  );
};

export default OrderStats;
