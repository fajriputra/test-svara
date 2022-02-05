import { GET_ALL_POKEMON, GET_SINGLE_POKEMON } from "../constans";

import axios from "helpers/axios";
import { apiHost } from "config";

export const getAllPokemon = (offset, limit) => {
  return {
    type: GET_ALL_POKEMON,
    payload: axios.get(`${apiHost}/pokemon/?offset=${offset}&limit=${limit}`),
  };
};

export const getSinglePokemon = (name) => {
  return {
    type: GET_SINGLE_POKEMON,
    payload: axios.get(`${apiHost}/pokemon/${name}`),
  };
};
