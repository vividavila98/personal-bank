import React from 'react';
import { useHistory } from "react-router-dom";
import useRegisterForm from "./useRegisterForm.js";

export default function Register() {
    let history = useHistory();

    const url = "http://localhost:3001/api/register"; 
    const { handleFormChange, submitForm, values } = useRegisterForm(url);
    
    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise!</h1>
                <h2>Register an Account</h2>
                <form>
                    <input type="text" placeholder="Name" name="name" value={values.name} onChange={handleFormChange} />
                    <input type="text" placeholder="Email" name="email" value={values.email} onChange={handleFormChange} />
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleFormChange} />
                    <button type="submit" onClick={submitForm}>Register</button>
                    <p>Already have an account? <a href="/account/login" onClick={() => history.push("/account/login")}>Login now.</a></p>
                </form>
            </div>
        </div>
    )
}
