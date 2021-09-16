import React from 'react';
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import useAuth from '../hooks/useAuth.js';
import FormInput from '../components/FormInput.js';

export default function Login() {
    let history = useHistory();
    const {values, handleChange} = useForm({
        initialValues: {
            email: "",
            password: ""
        }
    })
    
    const { loginUser } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        loginUser(values);
    }
    
    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise</h1>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <FormInput type={"text"}
                               placeholder={"Email"} 
                               name={"email"} 
                               value={values.email} 
                               handleChange={handleChange} />
                    <FormInput type={"password"}
                               placeholder={"Password"} 
                               name={"password"} 
                               value={values.password} 
                               handleChange={handleChange} />
                    <button type="submit">Sign In</button>
                    <p>Don't have an account? <a href="/account/register" onClick={() => history.push("/account/register")}>Sign up now.</a></p>
                </form>
            </div>
        </div>
    )
}
