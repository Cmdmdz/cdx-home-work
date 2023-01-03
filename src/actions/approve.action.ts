
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { APPROVE_CLEAR, APPROVE_FAILED, APPROVE_FETCHING, APPROVE_SUCCESS, server } from "../Constants";
import { Status } from "../tpyes/status.type";

export const setApproveFetchingToState = () => ({
  type: APPROVE_FETCHING,
});

export const setApproveSuccessToState = (payload: Status[]) => ({
  type: APPROVE_SUCCESS,
  payload,
});

export const setApproveFailedToState = () => ({
  type: APPROVE_FAILED,
});

export const setApproveClearToState = () => ({
  type: APPROVE_CLEAR,
});

export const loadListWorkApprove = () => {
  return (dispatch: any) => {
    alert("test")
    dispatch(setApproveFetchingToState());
    doGetWorkApprove(dispatch);
  };
};



const doGetWorkApprove = async (dispatch: any) => {
  try {
    const result = await httpClient.get<Status[]>(server.WORK_APPROVE);
    console.log(result.data);
    
    dispatch(setApproveSuccessToState(result.data));
  } catch (error) {
    dispatch(setApproveFailedToState());
  }
};





