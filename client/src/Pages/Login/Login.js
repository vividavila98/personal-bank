import React from 'react';
import useLoginForm from './useLoginForm';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function Login() {
    let history = useHistory();
    
    const url = "http://localhost:3001/api/login"; 
    const { handleFormChange, submitForm, values, redirect } = useLoginForm(url);

    if (redirect) {
        return <Redirect to="/account/profile" />
    }
    
    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise</h1>
                <h2>Sign In</h2>
                <form>
                    <input type="text" placeholder="Email" name="email" value={values.email} onChange={handleFormChange} />
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleFormChange} />
                    <button type="submit" onClick={submitForm}>Sign In</button>
                    <p>Don't have an account? <a href="/account/register" onClick={() => history.push("/account/register")}>Sign up now.</a></p>
                </form>
            </div>
        </div>
    )
}
