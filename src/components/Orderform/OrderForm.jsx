import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import './OrderForm.css'

const OrderForm = ({ onAddOrder }) => {
  const [customer, setCustomer] = useState("");
  const [products, setProducts] = useState([{ name: "", quantity: 1, price: 0 }]);

  const addProduct = () => {
    setProducts([...products, { name: "", quantity: 1, price: 0 }]);
  };

  const handleProductChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = value;
    setProducts(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customer.length < 3) {
      alert("❌ El cliente debe tener al menos 3 caracteres");
      return;
    }

    if (products.some((p) => p.quantity <= 0)) {
      alert("❌ Todas las cantidades deben ser > 0");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customer,
      date: new Date(),
      status: "pending",
      products,
    };

    onAddOrder(newOrder);
    setCustomer("");
    setProducts([{ name: "", quantity: 1, price: 0 }]);
  };

  return (
    <Card>
      <h3 className="font-bold">➕ Nuevo Pedido</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Cliente"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />

        <h4 className="font-medium">Productos</h4>
        {products.map((p, i) => (
          <div key={i} className="flex gap-2">
            <Input
              placeholder="Nombre"
              value={p.name}
              onChange={(e) => handleProductChange(i, "name", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Cantidad"
              value={p.quantity}
              onChange={(e) => handleProductChange(i, "quantity", parseInt(e.target.value))}
            />
            <Input
              type="number"
              placeholder="Precio"
              value={p.price}
              onChange={(e) => handleProductChange(i, "price", parseFloat(e.target.value))}
            />
          </div>
        ))}
        <Button type="button" onClick={addProduct}>
          ➕ Agregar producto
        </Button>

        <Button type="submit">Guardar Pedido</Button>
      </form>
    </Card>
  );
};

export default OrderForm;
