// src/components/DeleteAccount.js
import React from 'react';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import './AccountDetail.css';

const DeleteAccount = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await api.delete(`/accounts/${id}`);
            alert('Account deleted');
            navigate('/'); // Redirect to home after deletion
        } catch (error) {
            console.error('Error deleting account:', error);
            alert('Error deleting account');
        }
    };

    return (
        <div className="account-detail-container">
            <h2>Delete Account</h2>
            <p>Are you sure you want to delete this account?</p>
            <button onClick={handleDelete} className="action-button delete-button">Delete Account</button>
        </div>
    );
};

export default DeleteAccount;
