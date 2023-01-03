import {
  OK,
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  server,
} from "../Constants";
import { Customer } from "../tpyes/customer.type"
import { httpClient } from "../utils/httpclient";

export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload: any) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
});

export const register = (customer: Customer, navigate: any) => {
  return async (dispatch: any) => {
    try {
      // begin connecting...
      dispatch(setRegisterFetchingToState());
      // connect
      const result = await httpClient.post(server.REGISTER_URL, customer);
      
      if (result.status === 200) {
          dispatch(setRegisterSuccessToState(result.data));
          navigate("/login");
    
      } else {
        dispatch(setRegisterFailedToState());
      }
    } catch (error) {
      // error
      dispatch(setRegisterFailedToState());
    }
  };
};
