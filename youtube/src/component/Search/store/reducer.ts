import { SEARCHED_INPUT } from "./type";

type data = {
  type: string;
  payload: boolean;
};
type InputType = {
  type: string;
  payload: string;
};
const initial = {
  searchedHistory: [],
};

export const SearchInputReducer = (
  store = initial,
  { type, payload }: InputType
) => {
  switch (type) {
    case SEARCHED_INPUT:
      return { ...store, searchInput: payload };
    default:
      return store;
  }
};
