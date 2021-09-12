import { useState } from "react";
import Axios from "axios";

export default function useLoginForm(url) {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    // const [redirect, setRedirect] = useState(false);

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


            console.log(res.data);
            // setRedirect(true);
            
        } catch(e) {
            console.error(e);
        }
    }

    return { handleFormChange, submitForm, values };
}