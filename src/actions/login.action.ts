import {
  OK,
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
  TOKEN,
  LOGOUT
} from "../Constants";
import { Customer } from "../tpyes/customer.type"
import { httpClient } from "../utils/httpclient";
import { LoginResult } from "../tpyes/authen.type";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = () => ({
  type: LOGIN_FAILED,
});

export const setLogoutToState = () => ({
  type: LOGOUT,
});

export const login = (user: Customer, navigate: any) => {
  return async (dispatch: any) => {
    try {
      // begin connecting...
      dispatch(setLoginFetchingToState());
      // connect
      const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);

      if (result.status === 200) {

        localStorage.setItem(TOKEN, result.data.token!);
        localStorage.setItem('status', result.data.status!);
        // localStorage.setItem(USER_ID, result.data.userId!)
        dispatch(setLoginSuccessToState(result.data));
        navigate("/");

      } else {
        dispatch(setLoginFailedToState());
      }
    } catch (error) {
      // error
      dispatch(setLoginFailedToState());
    }
  };
};

export const restoreLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(
        setLoginSuccessToState({
          result: OK,
          token,
          message: "Login successfully",
        })
      );
    }
  };
};

export const logout = (navigate: any) => {
  return async (dispatch: any) => {

    try {
      dispatch(setLoginFetchingToState());
  
      const result = await httpClient.post<any>(server.LOG_OUT);
      if (result.status === 200) {
        localStorage.removeItem(TOKEN);
        dispatch(setLogoutToState());
        navigate("/login");

      } else {
        dispatch(setLoginFailedToState());
      }
    } catch (error) {
      // error
      dispatch(setLoginFailedToState());
    }


  };
};
