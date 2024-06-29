// api.js

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // Ensure this matches your Flask server URL
});

export const updateCycleAvailability = (cycleId, availability) => {
    return API.patch(`/cycles/${cycleId}`, { available: availability });
};

export default API;
