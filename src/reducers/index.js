import { combineReducers } from "redux";

import dropdownReducer from "./Slice/dropdownSlice";
import formdataReducer from "./Slice/formDataSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  dropdown: dropdownReducer,
  formSubmitData: formdataReducer,
});

export default rootReducer;
