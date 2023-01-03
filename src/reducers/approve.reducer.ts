import {
    APPROVE_CLEAR,
    APPROVE_FAILED,
    APPROVE_FETCHING,
    APPROVE_SUCCESS,
      } from "../Constants";
import { Status } from "../tpyes/status.type";
      
      export interface ApproveState {
        result: Status[];
        isFetching: boolean;
        isError: boolean;
      }
      
      const initialState: ApproveState = {
        result: [],
        isFetching: false,
        isError: false,
      };
      
      export default (state = initialState, { type, payload }: any) => {
        switch (type) {
          case APPROVE_FETCHING:
            return { ...state, result: [], isFetching: true, isError: false };
          case APPROVE_SUCCESS:
            return { ...state, result: payload, isFetching: false, isError: false };
          case APPROVE_FAILED:
            return { ...state, result: [], isFetching: false, isError: true };
          case APPROVE_CLEAR:
            return { ...state, result: [], isFetching: false, isError: false };
          default:
            return state;
        }
      };
      