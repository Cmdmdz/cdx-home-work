
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { COURSE_CLEAR, COURSE_FAILED, COURSE_FETCHING, COURSE_SUCCESS, server } from "../Constants";
import { Course } from "../tpyes/course.type";

export const setCourseFetchingToState = () => ({
  type: COURSE_FETCHING,
});

export const setCourseSuccessToState = (payload: Course[]) => ({
  type: COURSE_SUCCESS,
  payload,
});


export const setCourseFailedToState = () => ({
  type: COURSE_FAILED,
});

export const setCourseClearToState = () => ({
  type: COURSE_CLEAR,
});

export const loadListCourse = () => {
  return (dispatch: any) => {
    dispatch(setCourseFetchingToState());
    doGetCourse(dispatch);
  };
};


const doGetCourse = async (dispatch: any) => {
  try {
    const result = await httpClient.get<Course[]>(server.COURSE);
    console.log(result.data);
    
    dispatch(setCourseSuccessToState(result.data));
  } catch (error) {
    dispatch(setCourseFailedToState());
  }
};

export const deleteCourse = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setCourseFetchingToState());
    await httpClient.delete(`${server.COURSE}/${id}`);
    await doGetCourse(dispatch);
  };
};


export const addBook = (values: Course,navigate: any) => {
    console.log(values);
  return async (dispatch: any) => {
    await httpClient.post(server.COURSE, values);
    navigate(-1)
   
  };
};

export const editCourse = (values: Course, navigate: any, id: any) => {
  console.log(values);
  return async (dispatch: any) => {
    await httpClient.put(`${server.COURSE}/${id}`, values);
    navigate(-1)

  };
};

// export const deleteBook = (id: string) => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     dispatch(setBookFetchingToState());
//     await httpClient.delete(`${server.BOOK}/${id}`);
//     await doGetBook(dispatch);
//   };
// };


