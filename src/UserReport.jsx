import React, { useState, useEffect } from 'react';
import './UserReport.css';

const UserReport = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Example data; replace this with real data from an API or database.
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', createdAt: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', createdAt: '2024-03-10' },
      { id: 3, name: 'Michael Johnson', email: 'michael@example.com', role: 'User', createdAt: '2024-06-01' },
    ];
    setUsers(mockUsers);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-report-container">
      <h2>User Reports</h2>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search by name, email or role" 
          value={search} 
          onChange={handleSearch} 
        />
      </div>

      <table className="user-report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserReport;