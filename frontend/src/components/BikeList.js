import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const BikeList = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
            .then(response => {
                setBikes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the bikes!', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>Bike List</h1>
            <ul>
                {bikes.map(bike => (
                    <li key={bike._id}>{bike.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BikeList;
