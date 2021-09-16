import React, { useContext } from 'react';
import { UserContext } from "../hooks/UserContext.js";

export default function Profile() {
    const { user } = useContext(UserContext);

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
