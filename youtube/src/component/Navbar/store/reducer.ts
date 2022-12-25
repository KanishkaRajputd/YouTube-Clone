import { SHOW_SIDEBAR } from "./type";

type data = {
  type: string;
  payload: boolean;
};
const initial = { showSidebar: true };

export const SiderbarReducer = (store = initial, { type, payload }: data) => {
  switch (type) {
    case SHOW_SIDEBAR:
      return { ...store, showSidebar: payload };

    default:
      return store;
  }
};
