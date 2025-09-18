import Card from "../UI/Card/Card";
import './OrderStats.css'

const OrderStats = ({ orders }) => {
  const total = orders.length;
  const pending = orders.filter((o) => o.status === "pending").length;
  const shipped = orders.filter((o) => o.status === "shipped").length;
  const delivered = orders.filter((o) => o.status === "delivered").length;

  return (
    <Card>
      <h3 className="font-bold">📊 Estadísticas</h3>
      <p>Total pedidos: {total}</p>
      <p>Pendientes: {pending}</p>
      <p>Enviados: {shipped}</p>
      <p>Entregados: {delivered}</p>
    </Card>
  );
};

export default OrderStats;
