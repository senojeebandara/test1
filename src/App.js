import React, { useState } from 'react';
import './App.css'; // Importing external CSS file

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([
    { name: 'Supplier A', category: "Women’s Clothing", contact: 'supplierA@example.com' },
    { name: 'Supplier B', category: 'Accessories', contact: 'supplierB@example.com' },
  ]);
  
  const [orders, setOrders] = useState([
    { id: '001', supplier: 'Supplier A', date: '2025-02-25', status: 'Delivered', amount: '$500' },
    { id: '002', supplier: 'Supplier B', date: '2025-03-01', status: 'Pending', amount: '$300' },
  ]);

  const [newSupplier, setNewSupplier] = useState({
    name: '',
    category: 'Women’s Clothing',
    contact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSupplier((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuppliers([...suppliers, newSupplier]);
    setNewSupplier({ name: '', category: 'Women’s Clothing', contact: '' });
  };

  return (
    <div>
      <header className="header">
        <h1>Supplier Management - Mandela Factory Outlet</h1>
      </header>
      <nav className="nav">
        <a href="index.html">Home</a>
        <a href="#add-supplier">Add Supplier</a>
        <a href="#supplier-list">Supplier List</a>
        <a href="#orders">Orders</a>
      </nav>
      <div className="container">
        <h2 id="add-supplier">Add New Supplier</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Supplier Name:</label>
            <input
              type="text"
              name="name"
              value={newSupplier.name}
              onChange={handleInputChange}
              placeholder="Enter supplier name"
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              name="category"
              value={newSupplier.category}
              onChange={handleInputChange}
            >
              <option>Women’s Clothing</option>
              <option>Men’s Clothing</option>
              <option>Kids' Wear</option>
              <option>Accessories</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact Information:</label>
            <input
              type="text"
              name="contact"
              value={newSupplier.contact}
              onChange={handleInputChange}
              placeholder="Enter contact details"
            />
          </div>
          <button type="submit" className="button">Add Supplier</button>
        </form>
        
        <h2 id="supplier-list">Supplier List</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Category</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier, index) => (
                <tr key={index}>
                  <td>{supplier.name}</td>
                  <td>{supplier.category}</td>
                  <td>{supplier.contact}</td>
                  <td>
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <h2 id="orders">Order History</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Supplier</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.supplier}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierManagement;
