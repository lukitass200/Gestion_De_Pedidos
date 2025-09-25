import Select from "../UI/Select/Select";
import './OrderFilter.css';

const OrderFilter = ({ selectedStatus, onChange }) => {
  const statuses = ["all", "pending", "shipped", "delivered"];

  return (
    <div className="order-filter flex items-center gap-2">
      <label className="order-filter__label">Filtrar por estado:</label>
      <Select
        className="order-filter__select"
        value={selectedStatus}
        onChange={(e) => onChange(e.target.value)}
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default OrderFilter;