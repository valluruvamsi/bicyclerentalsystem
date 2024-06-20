import React from 'react';
import './App.css';
import AddBikeForm from './components/AddBikeForm';
import BikeList from './components/BikeList';

const App = () => {
    const handleAddBike = () => {
        // Function to refresh bike list after adding a bike (if needed)
        // You can implement this as needed based on your current setup
        console.log('Bike added! Refreshing list...');
        // Example: Fetch updated bike list from server or update state to trigger re-render
    };

    return (
        <div className="App">
            <h1>Bicycle Rental System</h1>
            <AddBikeForm onAdd={handleAddBike} />
            <BikeList />
        </div>
    );
}

export default App;
