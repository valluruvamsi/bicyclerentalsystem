import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';  // Updated import path

const AddBike = () => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/bikes', { name })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error adding the bike!', error);
            });
    };

    return (
        <div className="container">
            <h1>Add Bike</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Bike Name"
                />
                <button type="submit">Add Bike</button>
            </form>
        </div>
    );
}

export default AddBike;
