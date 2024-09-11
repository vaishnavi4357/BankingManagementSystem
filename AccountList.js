// src/components/AccountList.js
import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';
import './AccountList.css';

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await api.get('/all');
                setAccounts(response.data);
            } catch (error) {
                console.error('Error fetching accounts:', error);
            }
        };

        fetchAccounts();
    }, []);

    return (
        <div className="account-list-container">
            <h2>All Accounts</h2>
            <ul className="account-list">
                {accounts.length > 0 ? (
                    accounts.map((account) => (
                        <li key={account.id} className="account-item">
                            <Link to={`/account/${account.id}`}>
                                {account.accountHolderName} - ${account.balance}
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>No accounts found.</p>
                )}
            </ul>
        </div>
    );
};

export default AccountList;
