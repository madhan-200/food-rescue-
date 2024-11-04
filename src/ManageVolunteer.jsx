import React, { useState, useEffect } from 'react';
import './ManageVolunteer.css';

const ManageVolunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  useEffect(() => {
    // Example data; replace with actual data from API/database.
    const mockVolunteers = [
      { id: 1, name: 'Alice Green', email: 'alice@example.com', phone: '123-456-7890', area: 'District A' },
      { id: 2, name: 'Bob White', email: 'bob@example.com', phone: '234-567-8901', area: 'District B' },
      { id: 3, name: 'Charlie Blue', email: 'charlie@example.com', phone: '345-678-9012', area: 'District C' },
    ];
    setVolunteers(mockVolunteers);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleEdit = (volunteer) => {
    setSelectedVolunteer(volunteer);
    // You can integrate editing logic here or open a modal with volunteer data pre-filled for editing.
  };

  const handleDelete = (id) => {
    setVolunteers(volunteers.filter(volunteer => volunteer.id !== id));
  };

  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(search.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(search.toLowerCase()) ||
    volunteer.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-volunteer-container">
      <h2>Manage Volunteers</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, email or area"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <table className="volunteer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Area</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVolunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.phone}</td>
              <td>{volunteer.area}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(volunteer)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(volunteer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedVolunteer && (
        <div className="volunteer-edit-modal">
          {/* Modal for editing volunteers - can be implemented as needed */}
          <h3>Edit Volunteer: {selectedVolunteer.name}</h3>
          {/* Form for editing volunteer details */}
        </div>
      )}
    </div>
  );
};

export default ManageVolunteer;