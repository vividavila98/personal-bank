import { useState } from "react";
import Axios from "axios";

export default function useRegisterForm(url) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

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
            const res = await Axios.post(url, {name: values.name, email: values.email, password: values.password});
            console.log(res.data);
        } catch(e) {
            console.error(e);
        }
    }

    return { handleFormChange, submitForm, values };
}