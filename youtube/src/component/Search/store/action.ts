import { SEARCHED_INPUT } from "./type";

export const SearchInputAction = (data: string) => {
  return {
    type: SEARCHED_INPUT,
    payload: data,
  };
};
