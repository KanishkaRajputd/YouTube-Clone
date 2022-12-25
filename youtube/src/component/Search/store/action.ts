import { SEARCHED_HISTORY, SEARCHED_INPUT } from "./type";

export const SearchHistoryAction = (data: []) => {
  return {
    type: SEARCHED_HISTORY,
    payload: [...data, data],
  };
};
export const SearchInputAction = (data: string) => {
  return {
    type: SEARCHED_INPUT,
    payload: data,
  };
};
