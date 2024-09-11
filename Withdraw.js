// src/components/Withdraw.js
import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import './AccountDetail.css';

const Withdraw = () => {
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

    const handleWithdraw = async () => {
        try {
            await api.put(`/accounts/${id}/withdraw`, { amount });
            alert('Withdrawal successful');
            navigate(`/account/${id}`); // Redirect back to account details
        } catch (error) {
            console.error('Error withdrawing funds:', error);
            alert('Error withdrawing funds');
        }
    };

    if (!account) return <p>Loading...</p>;

    return (
        <div className="account-detail-container">
            <h2>Withdraw from {account.accountHolderName}</h2>
            <p>Balance: ${account.balance.toFixed(2)}</p>
            <div className="form-group">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="input-field"
                />
                <button onClick={handleWithdraw} className="action-button">Withdraw</button>
            </div>
        </div>
    );
};

export default Withdraw;
