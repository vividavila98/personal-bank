import { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../hooks/UserContext.js";

export default function useLogout() {
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    const url = "http://localhost:3001/api"

    const logoutUser = async () => {
        console.log("clicked");
        try {
            const res = await axios.get(`${url}/logout`);
            console.log(res);
            history.push("/");
            setUser(null);
        } catch(e) {
            console.error(e);
        }
    }

    return { logoutUser }
}