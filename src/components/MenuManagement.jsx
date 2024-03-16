import React, { useState } from 'react';
import './MenuManagement.css';


const initialMenuItems = [
  { id: 1, name: "Margherita Pizza", price: 10, available: true },
  { id: 2, name: "Pasta Carbonara", price: 12, available: true },
  { id: 3, name: "Caesar Salad", price: 8, available: true },
];

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newItem, setNewItem] = useState({ name: '', price: '', available: true });

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItemWithId = { ...newItem, id: Date.now(), available: true };
    setMenuItems([...menuItems, newItemWithId]);
    setNewItem({ name: '', price: '', available: true });
  };

  const handleRemoveItem = (itemId) => {
    setMenuItems(menuItems.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item name"
          required
        />
        <input
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          placeholder="Price"
          required
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - {item.available ? 'Available' : 'Not Available'}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuManagement;
