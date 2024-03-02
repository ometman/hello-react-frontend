import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/greetings');
      return response.data;
    } catch (error) {
      console.error('Error fetching greeting:', error);
      throw error;
    }
  }
);
