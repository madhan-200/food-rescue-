import React, { useState } from 'react';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'user',
        phone: ''
    });
    const [message, setMessage] = useState('');

    const datahandleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/add-user', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Network response was not ok');
            }

            const result = await response.json();
            setMessage('User added successfully!');
            setFormData({ name: '', email: '', role: 'user', phone: '' });
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={(e) => { e.preventDefault(); datahandleSubmit(); }}>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name"
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email"
                />
                <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="volunteer">Volunteer</option>
                </select>
                <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Phone"
                />
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddUser;