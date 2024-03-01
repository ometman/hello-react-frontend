export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchGreeting = () => async (dispatch) => {
  try {
    const response = await fetch('https://your-api-endpoint.com/greeting');
    const data = await response.json();
    dispatch(fetchGreetingSuccess(data.greeting));
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};
