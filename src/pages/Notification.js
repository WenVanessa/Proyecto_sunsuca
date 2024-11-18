import '../css/notificaction.css'
import React from 'react';

const Notification = ({ message, type, onClose }) => {
    if (!message) return null;

    return (
        <div className={`notification ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>&times;</button>
        </div>
    );
};

export default Notification;
