import { useEffect, useContext } from "react";
import { UserContext } from "../../Helper/UserContext";
import Axios from "axios";

export default function useProfile(url) {
    const { user, setUser } = useContext(UserContext);

    const getUserInfo = async e => {
        e.preventDefault();
        try {
            const res = await Axios.get(url, {withCredentials: true});

            console.log(res.data);
            
            // save to context
            setUser(res.data);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("email", res.data.email);
            
        } catch(e) {
            console.error(e);
        }
    }

    return { getUserInfo, user };
}