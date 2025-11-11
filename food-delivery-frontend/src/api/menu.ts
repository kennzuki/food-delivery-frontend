import api from '../lib/axios';
import axios from 'axios';

export const fetchMenu = async () => {
    try {
        const response = await axios.get('/menus');
        return response.data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
};