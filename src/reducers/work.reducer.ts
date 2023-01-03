import {
WORK_CLEAR,
WORK_FAILED,
WORK_FETCHING,
WORK_SUCCESS,
  } from "../Constants";
import { Status } from "../tpyes/status.type";
  
  export interface WorkState {
    result: Status[];
    isFetching: boolean;
    isError: boolean;
  }
  
  const initialState: WorkState = {
    result: [],
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case WORK_FETCHING:
        return { ...state, result: [], isFetching: true, isError: false };
      case WORK_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case WORK_FAILED:
        return { ...state, result: [], isFetching: false, isError: true };
      case WORK_CLEAR:
        return { ...state, result: [], isFetching: false, isError: false };
      default:
        return state;
    }
  };
  