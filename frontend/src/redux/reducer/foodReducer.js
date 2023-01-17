import { GET_FOOD } from "../ActionTypes/Foodtype";

const initialState = {
  foods: [],
};

const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FOOD:
      return { ...state, foods: payload.foods };

    default:
      return state;
  }
};
export default foodReducer;
