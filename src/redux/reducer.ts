import { combineReducers } from "redux";
import navbarMobileReducer from "./navbarMobile/reducer";

const reducer: any = combineReducers({
  navbarMobile: navbarMobileReducer,
});

export default reducer;
