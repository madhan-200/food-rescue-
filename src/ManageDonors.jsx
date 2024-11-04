import React, { useState } from 'react';
import './ManageDonors.css';

const ManageDonors = () => {
  const initialDonors = [
    { id: 1, name: 'John Doe', donation: 'Canned Beans', quantity: 20, date: '2024-10-12' },
    { id: 2, name: 'Jane Smith', donation: 'Bread', quantity: 10, date: '2024-10-11' },
  ];

  const [donors, setDonors] = useState(initialDonors);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: '', donation: '', quantity: '', date: '' });

  // Handle input change for editing
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Start editing a row
  const handleEditClick = (donor) => {
    setEditingId(donor.id);
    setEditFormData({ ...donor });
  };

  // Save the edited donor
  const handleSaveClick = () => {
    const updatedDonors = donors.map((donor) =>
      donor.id === editingId ? { ...editFormData, id: editingId } : donor
    );
    setDonors(updatedDonors);
    setEditingId(null);
  };

  // Delete a donor
  const handleDeleteClick = (id) => {
    const updatedDonors = donors.filter((donor) => donor.id !== id);
    setDonors(updatedDonors);
  };

  return (
    <div className="manage-donors-container">
      <h2>Manage Donors</h2>
      <table className="donors-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Donation</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              {editingId === donor.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditInputChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="donation"
                      value={editFormData.donation}
                      onChange={handleEditInputChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={editFormData.quantity}
                      onChange={handleEditInputChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      name="date"
                      value={editFormData.date}
                      onChange={handleEditInputChange}
                      required
                    />
                  </td>
                  <td>
                    <button onClick={handleSaveClick} className="save-btn">Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{donor.name}</td>
                  <td>{donor.donation}</td>
                  <td>{donor.quantity}</td>
                  <td>{donor.date}</td>
                  <td>
                    <button onClick={() => handleEditClick(donor)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDeleteClick(donor.id)} className="delete-btn">Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDonors;