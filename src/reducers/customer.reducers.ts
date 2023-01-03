import {
    CUSTOMER_CLEAR,
    CUSTOMER_FAILED,
    CUSTOMER_FETCHING,
    CUSTOMER_SUCCESS,
  } from "../Constants";
import { Course } from "../tpyes/course.type";
  
  export interface CustomerState {
    result: Course[];
    isFetching: boolean;
    isError: boolean;
  }
  
  const initialState: CustomerState = {
    result: [],
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case CUSTOMER_FETCHING:
        return { ...state, result: [], isFetching: true, isError: false };
      case CUSTOMER_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case CUSTOMER_FAILED:
        return { ...state, result: [], isFetching: false, isError: true };
      case CUSTOMER_CLEAR:
        return { ...state, result: [], isFetching: false, isError: false };
      default:
        return state;
    }
  };
  