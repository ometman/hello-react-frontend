import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/greetings');
    return response.data;
  },
);

export default fetchGreeting;
