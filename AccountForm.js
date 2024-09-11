// src/components/AccountForm.js
import React, { useState } from 'react';
import { api } from '../api';
import './AccountForm.css'; // Import CSS file

const AccountForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [balance, setBalance] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/abc', { accountHolderName: name, balance });
            onCreate(response.data);
            setName('');
            setBalance(0);
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    return (
        <div className="account-form-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} className="account-form">
                <input
                    type="text"
                    placeholder="Account Holder Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Initial Balance"
                    value={balance}
                    onChange={(e) => setBalance(parseFloat(e.target.value))}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-button">Create Account</button>
            </form>
        </div>
    );
};

export default AccountForm;
