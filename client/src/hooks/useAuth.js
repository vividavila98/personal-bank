import React, { useState, useContext } from 'react';
import axios from "axios";
import { UserContext } from './UserContext';

export default function useAuth() {
    axios.defaults.withCredentials = true;
    const { user, setUser } = useContext(UserContext);

    const url = "http://localhost:3001/api"

    // Save user to context value
    const setUserContext = async () => {
        try {
            const res = await axios.get(`${url}/userInfo`, {withCredentials: true});
            setUser(res.data);
        } catch(e) {
            console.error(e);
        }
    }

    // Register user
    const registerUser = async (data) => {
        const { name, email, password} = data;

        try {
            const res = await axios.post(`${url}/register`, {name: name, email: email, password: password});
            console.log("Registered:");
            console.log(res.data);
            // await setUserContext();
        } catch(e) {
            console.error(e);
        }
    }

    // Do I want to create a cookie on register AND login? 

    // Login user
    const loginUser = async (data) => {
        const { email, password} = data;

        try {
            const res = await axios.post(`${url}/login`, {email: email, password: password});
            console.log("Logged in:");
            console.log(res.data);
            await setUserContext();
        } catch(e) {
            console.error(e);
        }
    }


    return { registerUser, loginUser }
}
