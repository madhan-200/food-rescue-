import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import './ManageUser.css';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/manage-users'); // Adjust the URL as needed
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/manage-users/${userId}`); // Adjust the URL as needed
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError('Error deleting user');
    }
  };  

  const handleEdit = (user) => {
    setEditMode(user.id);
    setEditedUser(user);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3000/api/manage-users/${editedUser.id}`, editedUser); // Adjust the URL as needed
      setUsers(users.map((user) =>
        user.id === editedUser.id ? editedUser : user
      ));
      setEditMode(null);
    } catch (err) {
      setError('Error saving user');
    }
  };

  const handleCancel = () => {
    setEditMode(null);
    setEditedUser({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  if (loading) {
    return <div>Loading...</div>; // Loading message
  }

  return (
    <div className="manage-user-container">
      <h2>Manage Users</h2>
      {error && <p className="error-message">{error}</p>} {/* Error message */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editMode === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editMode === user.id ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editMode === user.id ? (
                  <select
                    name="role"
                    value={editedUser.role}
                    onChange={handleChange}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td>
                {editMode === user.id ? (
                  <>
                    <button onClick={handleSave} className="save-btn">Save</button>
                    <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(user)} className="edit-btn">Edit</button>
                    <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;