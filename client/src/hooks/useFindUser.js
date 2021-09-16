import axios from 'axios';
import { useState, useEffect} from 'react';

export default function useFindUser() {
    const [user, setUser] = useState(null);

    const url = "http://localhost:3001/api"
    // const [isLoading, setLoading] = useState(true);

    const findUser = async () => {
        try {
            const res = await axios.get(`${url}/userInfo`, {withCredentials: true});
            setUser(res.data);
            
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        findUser();
    }, []);

    return { user, setUser}
}
