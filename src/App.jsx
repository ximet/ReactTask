import { useEffect, useState } from 'react';
import axios from 'axios';

import { requestToken, instance } from './DataService/dataService';
import { COOKIE } from './DataService/cookieService';
import { findMyLocation } from './Helpers/geolocation';

function App() {
    const [resourceType, setResourceType] = useState('location/search/Bucharest');
    const [location, setLocation] = useState('');
    const [items, setItems] = useState([]);

    async function tokenCheck() {
        const token = (await requestToken()) || COOKIE.loadToken();
        if (token) {
            COOKIE.saveToken(token);
        }
    }

    useEffect(async () => {
        await tokenCheck();
    }, []);

    useEffect(async () => {
        const res = await instance.get(`${resourceType}`);
        console.log(res.data.locations);
        console.log(res.data.current);

        // setItems(res.data);
    }, [resourceType]);

    return (
        <div>
            <button onClick={() => setResourceType('location/search/Bucharest')}>Location</button>
            <button onClick={() => setResourceType('observation/latest/Bucharest')}>
                Observations
            </button>
            <button onClick={() => setResourceType('current/100683506')}>
                Current Weather Estimate
            </button>
            <h1>{resourceType}</h1>
            {/* {items.map((item) => {
                return <pre>{item}</pre>;
            })} */}
        </div>
    );
}

export default App;
