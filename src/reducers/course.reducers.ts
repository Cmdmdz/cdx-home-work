import {
    COURSE_CLEAR,
    COURSE_FAILED,
    COURSE_FETCHING,
    COURSE_SUCCESS,
  } from "../Constants";
import { Course } from "../tpyes/course.type";
  
  export interface CourseState {
    result: Course[];
    isFetching: boolean;
    isError: boolean;
  }
  
  const initialState: CourseState = {
    result: [],
    isFetching: false,
    isError: false,
  };
  
  export default (state = initialState, { type, payload }: any) => {
    switch (type) {
      case COURSE_FETCHING:
        return { ...state, result: [], isFetching: true, isError: false };
      case COURSE_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false };
      case COURSE_FAILED:
        return { ...state, result: [], isFetching: false, isError: true };
      case COURSE_CLEAR:
        return { ...state, result: [], isFetching: false, isError: false };
      default:
        return state;
    }
  };
  