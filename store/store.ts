// store.ts
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  user: null,
  isAuthenticated: false,
};

// Define actions
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Action creators
export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });

// Reducer
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
