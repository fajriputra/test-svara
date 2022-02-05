import { ADD_FAVORITE, DELETE_FAVORITE } from "../constant";

export const addFavorite = (payload) => {
  return { type: ADD_FAVORITE, payload };
};

export const deleteFavorite = (payload) => {
  return { type: DELETE_FAVORITE, payload };
};
