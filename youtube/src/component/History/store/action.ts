import { VIDEO_HISTORY } from "./type";

export const HistoryAction = (data: any) => {
  return {
    type: VIDEO_HISTORY,
    payload: data,
  };
};
