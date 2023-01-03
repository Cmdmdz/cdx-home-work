// Success Page
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

// Course Page

export const COURSE_FETCHING = "COURSE_FETCHING";
export const COURSE_SUCCESS = "COURSE_SUCCESS";
export const COURSE_FAILED = "COURSE_FAILED";
export const COURSE_CLEAR = "COURSE_CLEAR";

// Customer page

export const CUSTOMER_FETCHING = "CUSTOMER_FETCHING";
export const CUSTOMER_SUCCESS = "CUSTOMER_SUCCESS";
export const CUSTOMER_FAILED ="CUSTOMER_FAILED";
export const CUSTOMER_CLEAR = "CUSTOMER_CLEAR"

// HomeWork page

export const WORK_FETCHING = "WORK_FETCHING";
export const WORK_SUCCESS = "WORK_SUCCESS";
export const WORK_FAILED = "WORK_FAILED";
export const WORK_CLEAR = "WORK_CLEAR";

export const APPROVE_FETCHING = "APPROVE_FETCHING";
export const APPROVE_SUCCESS = "APPROVE_SUCCESS";
export const APPROVE_FAILED = "APPROVE_FAILED";
export const APPROVE_CLEAR = "APPROVE_CLEAR";

export const apiUrl = "http://127.0.0.1:8000/api/";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";
export const TOKEN = "TOKEN";
export const USER_ID = "USER_ID";

export const LOGIN_STATUS = "LOGIN_STATUS";

export const server = {
  LOGIN_URL: `login`,
  REGISTER_URL: `register`,
  USER: `user`,
  LOG_OUT: `logout`,
  COURSE: `course`,
  CUSTOMER_ID: `customerList`,
  WORK:`work`,
  WORK_APPROVE: `status`,
  CUSTOMER_BYID:`customerById` ,
};

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
