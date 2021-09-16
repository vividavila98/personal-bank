import { useState, useContext } from "react";
import { UserContext } from "./UserContext.js";
import Axios from "axios";

export default function useLoginForm(url) {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const { user, setUser } = useContext(UserContext);

    const handleFormChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const submitForm = async e => {
        e.preventDefault();
        try {
            const res = await Axios.post(url, {
                email: values.email, 
                password: values.password
            }, 
            {withCredentials: true});

            setUser(res.data);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("email", res.data.email);
            console.log(user);
            // setRedirect(true);
            
        } catch(e) {
            console.error(e);
        }
    }

    return { handleFormChange, submitForm, values };
}