import { SEARCHED_HISTORY, SEARCHED_INPUT } from "./type";

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
const initial1 = {
  searchInput: "s",
};

export const SearchHistoryReducer = (
  store = initial,
  { type, payload }: data
) => {
  switch (type) {
    case SEARCHED_HISTORY:
      return { ...store, showSidebar: [...store?.searchedHistory, payload] };
    default:
      return store;
  }
};
export const SearchInputReducer = (
  store = initial1,
  { type, payload }: InputType
) => {
  switch (type) {
    case SEARCHED_INPUT:
      return { ...store, searchInput: payload };
    default:
      return store;
  }
};
