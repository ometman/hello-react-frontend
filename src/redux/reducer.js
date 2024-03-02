import { createSlice } from '@reduxjs/toolkit';
import { fetchGreeting } from './actions';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    status: 'idle',
    error: null, 
  },
  reducers: {
    setGreeting(state, action) {
      state.greeting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        console.log('Fetching greeting...');
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        console.log('Greeting fetched successfully:', action.payload);
        state.status = 'succeeded';
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        console.log('Error fetching greeting:', action.error.message);
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
