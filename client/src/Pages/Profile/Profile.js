import React from 'react';
import useProfile from "./useProfile.js";

export default function Profile() {
    const url = "http://localhost:3001/api/userInfo"; 
    const { getUserInfo } = useProfile(url);

    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>Your secret profile!</h1>
                <p>Name: </p>
                <p>Email: </p>
                <button onClick={getUserInfo}>User Info</button>
            </div>
        </div>
    )
}
