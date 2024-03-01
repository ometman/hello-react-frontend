import { FETCH_GREETING_SUCCESS } from './actions';

const initialState = {
  greeting: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
