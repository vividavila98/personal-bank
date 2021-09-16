import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext.js";
import Axios from "axios";

export default function useProfile(url) {
    const { user, setUser } = useContext(UserContext);

    const getUserInfo = async () => {
        try {
            const res = await Axios.get(url, {withCredentials: true});
            
            // save to context
            setUser(res.data);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("email", res.data.email);
            
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const localName = localStorage.getItem("name");
        const localEmail = localStorage.getItem("email");
        if (localName) {
            setUser({
                ...user, 
                name: localName,
                email: localEmail
            })
        }
    }, []);

    return { getUserInfo, user };
}