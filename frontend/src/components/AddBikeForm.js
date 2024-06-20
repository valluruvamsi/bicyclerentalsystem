import React, { useState } from 'react';
import axios from 'axios';

const AddBikeForm = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/bikes', {
                name,
                type,
                color
            });
            // Optionally handle success (e.g., clear form fields, show success message)
            setName('');
            setType('');
            setColor('');
            // Trigger parent component to refresh bike list
            onAdd();
        } catch (error) {
            console.error('Error adding bike:', error);
            // Optionally handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h2>Add Bike</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
                <button type="submit">Add Bike</button>
            </form>
        </div>
    );
}

export default AddBikeForm;
