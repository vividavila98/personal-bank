import React from 'react';
import { useHistory } from "react-router-dom";

export default function Home() {
    let history = useHistory();

    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise</h1>
                <h2>A New Way to Save Money</h2>
                <p>Track your exepnses by breaking them into 
                    different categories: bills, dining, health, 
                    &amp; more. 
                </p>
                <p>All you have to do is link your bank account
                    to get started!
                </p>
                <button onClick={() => history.push("/account/register")}>Register Now</button>
                <p>Already have an account? <a href="/account/login" onClick={() => history.push("/account/login")}>Login now.</a></p>
            </div>
        </div>
    )
}
