import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from './actions';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setGreeting(state, action) {
      return { ...state, greeting: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({ ...state, status: 'loading', error: null }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state, status: 'succeeded', greeting: action.payload,
      }))
      .addCase(fetchGreeting.rejected, (state, action) => ({
        ...state, status: 'failed', error: action.error.message,
      }));
  },
});

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;
