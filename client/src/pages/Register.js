import React from 'react';
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm.js";
import useAuth from '../hooks/useAuth.js';
import FormInput  from '../components/FormInput.js';

export default function Register() {
    let history = useHistory();

    const { values, handleChange } = useForm({
        initialValues: {
            name: "",
            email: "",
            password: ""
        }
    });
    
    const { registerUser } = useAuth();

    const handleRegister = e => {
        e.preventDefault();
        registerUser(values);
    }
    
    return (
        <div className="entry-page">
            <div className="page-body">
                <h1>MoneyWise!</h1>
                <h2>Register an Account</h2>
                <form onSubmit={handleRegister}>
                    <FormInput type={"text"}
                               placeholder={"Name"} 
                               name={"name"} 
                               value={values.name} 
                               handleChange={handleChange} />
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
                    <button type="submit">Register</button>
                    <p>Already have an account? <a href="/account/login" onClick={() => history.push("/account/login")}>Login now.</a></p>
                </form>
            </div>
        </div>
    )
}
