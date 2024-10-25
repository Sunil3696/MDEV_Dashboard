import React, { useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/userProfile.css';

const UserProfile = () => {
    const { currentUser } = useAuth();
//widget to show user details on dashboard as widget
    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {currentUser ? (
                <div className="profile-info">
                    <p><strong>Email:</strong> {currentUser?.email}</p>
                    <p><strong>User ID:</strong> {currentUser?.uid}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;
