import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SomeService from './SomeService';
import './Page.css';

const Page = ({ variant, ...props }) => {
    // Constants
    const MAX_COUNT = 10;

    // Redux State
    const user = useSelector(state => state.user);

    // Local State
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    // useEffect for loading data
    useEffect(() => {
        SomeService.getData().then(data => setData(data));
    }, []);

    // useEffect for user-related operations
    useEffect(() => {
        if (user) {
            console.log('User updated:', user);
        }
    }, [user]);

    // Event Handlers
    const handleIncrement = () => {
        if (count < MAX_COUNT) {
            setCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div className={`page page-${variant}`}>
            <h1>Welcome, {user.name}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <p>Count: {count}</p>
            {data && <div>Data loaded!</div>}
        </div>
    );
};

export default Page;
