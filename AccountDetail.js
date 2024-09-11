// src/components/AccountDetail.js
import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useParams, Link } from 'react-router-dom';
import './AccountDetail.css';

const AccountDetail = () => {
    const { id } = useParams();
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

    if (!account) return <p>Loading...</p>;

    return (
        <div className="account-detail-container">
            <h2>{account.accountHolderName}</h2>
            <p>Balance: ${account.balance.toFixed(2)}</p>
            <div className="action-links">
                <Link to={`/account/${id}/deposit`} className="action-button">Deposit</Link>
                <Link to={`/account/${id}/withdraw`} className="action-button">Withdraw</Link>
                <Link to={`/account/${id}/delete`} className="action-button delete-button">Delete Account</Link>
            </div>
        </div>
    );
};

export default AccountDetail;
