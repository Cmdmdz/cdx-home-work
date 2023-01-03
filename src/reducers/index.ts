import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";
import courseReducer, { CourseState } from "./course.reducers";
import customerReducers, { CustomerState } from "./customer.reducers";
import workReducer, { WorkState } from "./work.reducer";
import approveReducer, {ApproveState} from "./approve.reducer";
export default combineReducers({
  registerReducer,
  loginReducer,
  courseReducer,
  customerReducers,
  workReducer,
  approveReducer,
});

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
  courseReducer: CourseState;
  customerReducers: CustomerState;
  workReducer: WorkState;
  approveReducer:ApproveState;

}
