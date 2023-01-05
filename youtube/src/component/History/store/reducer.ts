import { VIDEO_HISTORY } from "./type";

type data = {
  type: string;
  payload: any;
};
const initial = {
  history: [],
};

export const HistoryReducer = (store = initial, { type, payload }: data) => {
  switch (type) {
    case VIDEO_HISTORY:
      return { ...store, history: [...store?.history, payload] };

    default:
      return store;
  }
};
