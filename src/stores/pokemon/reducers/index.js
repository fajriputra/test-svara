import { GET_ALL_POKEMON } from "stores/pokemon/constans";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
};

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_POKEMON}_PENDING`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        data: [],
      };
    }
    case `${GET_ALL_POKEMON}_FULFILLED`: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        data: action.payload.data.results,
      };
    }
    case `${GET_ALL_POKEMON}_REJECTED`: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemon;
