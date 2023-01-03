
import { httpClient } from "../utils/httpclient";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { CUSTOMER_CLEAR, CUSTOMER_FAILED, CUSTOMER_FETCHING, CUSTOMER_SUCCESS, server } from "../Constants";
import { Customer } from "../tpyes/customer.type";

export const setCustomerFetchingToState = () => ({
  type: CUSTOMER_FETCHING,
});

export const setCustomerSuccessToState = (payload: Customer[]) => ({
  type: CUSTOMER_SUCCESS,
  payload,
});


export const setCustomerFailedToState = () => ({
  type: CUSTOMER_FAILED,
});

export const setCustomerClearToState = () => ({
  type: CUSTOMER_CLEAR,
});

export const loadListCustomer = () => {
  return (dispatch: any) => {
    dispatch(setCustomerFetchingToState());
    doGetCustomerList(dispatch);
  };
};

export const loadListCustomerById = (id:any) => {
  return (dispatch: any) => {
    dispatch(setCustomerFetchingToState());
    doGetCustomerById(dispatch,id);
  };
};


const doGetCustomerList = async (dispatch: any) => {
  try {
    const result = await httpClient.get<Customer[]>(server.CUSTOMER_ID);
    console.log(result.data);
    
    dispatch(setCustomerSuccessToState(result.data));
  } catch (error) {
    dispatch(setCustomerFailedToState());
  }
};

const doGetCustomerById = async (dispatch: any,id:any) => {
  try {
    const result = await httpClient.get<Customer[]>(`${server.CUSTOMER_BYID}/${id}`);
    console.log(result.data);
    
    dispatch(setCustomerSuccessToState(result.data));
  } catch (error) {
    dispatch(setCustomerFailedToState());
  }
};



// export const addBook = (values: Book,navigate: any) => {
//     console.log(values);
//   return async (dispatch: any) => {
//     await httpClient.post(server.BOOK, values);
//     navigate(-1)
   
//   };
// };

// export const deleteBook = (id: string) => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     dispatch(setBookFetchingToState());
//     await httpClient.delete(`${server.BOOK}/${id}`);
//     await doGetBook(dispatch);
//   };
// };


