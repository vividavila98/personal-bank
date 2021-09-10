import React from 'react';
import { useHistory } from 'react-router';

export default function NotFound() {
    let history = useHistory();

    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise</h1>
                <h2>A New Way to Save Money</h2>
                <p>This page does not exist :(</p>
                <button onClick={() => history.push("/account/register")}>Register Now</button>
            </div>
        </div>
    )
}
