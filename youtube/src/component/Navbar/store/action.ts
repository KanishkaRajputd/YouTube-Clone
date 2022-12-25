import { SHOW_SIDEBAR } from "./type";

export const SidebarAction = (data: any) => {
  return {
    type: SHOW_SIDEBAR,
    payload: data,
  };
};
