// src/components/Deposit.js
import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import './AccountDetail.css';

const Deposit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await api.get(`/accounts/${id}`);
                setAccount(response.data);
            } catch (error) {
                console.error('Error fetching account:', error);
            }
        };

        fetchAccount();
    }, [id]);

    const handleDeposit = async () => {
        try {
            await api.put(`/accounts/${id}/deposit`, { amount });
            alert('Deposit successful');
            navigate(`/account/${id}`); // Redirect back to account details
        } catch (error) {
            console.error('Error depositing funds:', error);
            alert('Error depositing funds');
        }
    };

    if (!account) return <p>Loading...</p>;

    return (
        <div className="account-detail-container">
            <h2>Deposit to {account.accountHolderName}</h2>
            <p>Balance: ${account.balance.toFixed(2)}</p>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="input-field"
                />
                <button onClick={handleDeposit} className="action-button">Deposit</button>
            </div>
        </div>
    );
};

export default Deposit;
