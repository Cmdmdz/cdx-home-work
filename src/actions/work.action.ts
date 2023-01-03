
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { WORK_CLEAR, WORK_FAILED, WORK_FETCHING, WORK_SUCCESS, server } from "../Constants";
import { Work } from "../tpyes/worktype";

export const setWorkFetchingToState = () => ({
  type: WORK_FETCHING,
});

export const setWorkSuccessToState = (payload: Work[]) => ({
  type: WORK_SUCCESS,
  payload,
});


export const setWorkFailedToState = () => ({
  type: WORK_FAILED,
});

export const setWorkClearToState = () => ({
  type: WORK_CLEAR,
});

export const loadListWork = () => {
  return (dispatch: any) => {
    dispatch(setWorkFetchingToState());
    doGetWork(dispatch);
  };
};


const doGetWork = async (dispatch: any) => {
  try {
    const result = await httpClient.get<Work[]>(server.WORK);
    console.log(result.data);

    dispatch(setWorkSuccessToState(result.data));
  } catch (error) {
    dispatch(setWorkFailedToState());
  }
};


export const addWork = (values: Work, navigate: any) => {
  console.log(values);
  return async (dispatch: any) => {
    await httpClient.post(server.WORK, values);
    navigate(-1)

  };
};

export const editWork = (values: Work, navigate: any, id: any) => {
  console.log(values);
  return async (dispatch: any) => {
    await httpClient.put(`${server.WORK}/${id}`, values);
    navigate(-1)

  };
};

export const deleteWork = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setWorkFetchingToState());
    await httpClient.delete(`${server.WORK}/${id}`);
    await doGetWork(dispatch);
  };
};

// export const deleteBook = (id: string) => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     dispatch(setBookFetchingToState());
//     await httpClient.delete(`${server.BOOK}/${id}`);
//     await doGetBook(dispatch);
//   };
// };


