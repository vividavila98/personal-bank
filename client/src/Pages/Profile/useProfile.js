import { useEffect } from "react";
import Axios from "axios";

export default function useProfile(url) {


    const getUserInfo = async e => {
        e.preventDefault();
        try {
            const res = await Axios.get(url, {withCredentials: true});

            console.log("in component:");
            console.log(res.data);
            
        } catch(e) {
            console.error(e);
        }
    }

    return { getUserInfo };
}