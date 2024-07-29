import axios from 'axios';
import { DefaultPortNumber } from 'ezpzos.core';

// Create an Axios instance with a base URL
const apiClient = axios.create({
    baseURL: process.env.BASE_URL || `http://localhost:${DefaultPortNumber}`, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;