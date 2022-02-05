import { ADD_FAVORITE, DELETE_FAVORITE } from "../constant";

const initialState = [];

const favorite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return [...state, action.payload];
    }
    case DELETE_FAVORITE: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

export default favorite;
