// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountForm from './components/AccountForm';
import AccountList from './components/AccountList';
import AccountDetail from './components/AccountDetail';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import DeleteAccount from './components/DeleteAccount';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <h1>Banking Application</h1>
                <Routes>
                    <Route path="/" element={<><AccountForm /><AccountList /></>} />
                    <Route path="/account/:id" element={<AccountDetail />} />
                    <Route path="/account/:id/deposit" element={<Deposit />} />
                    <Route path="/account/:id/withdraw" element={<Withdraw />} />
                    <Route path="/account/:id/delete" element={<DeleteAccount />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
