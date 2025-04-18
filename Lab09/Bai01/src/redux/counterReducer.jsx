// src/redux/counterReducer.js
const initialState = {
    count: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  // Actions
  export const increment = () => ({
    type: "INCREMENT",
  });
  
  export const decrement = () => ({
    type: "DECREMENT",
  });
  