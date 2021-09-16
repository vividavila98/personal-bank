import React from 'react';
import useProfile from "../hooks/useProfile.js";

export default function Profile() {
    const url = "http://localhost:3001/api/userInfo"; 
    const { user } = useProfile(url);

    console.log(user);

    return (
        user ? (
            <div className="entry-page">
            <div className="page-body">
                <h1>Your secret profile!</h1>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button>Sign Out</button>
            </div>
        </div>
        ) : (
            <div className="entry-page">
            <div className="page-body">
                <h1>Your secret profile!</h1>
                <p>loading ...</p>
                <p>loading ...</p>
                <button>Sign Out</button>
            </div>
        </div>
        )
    )
}
