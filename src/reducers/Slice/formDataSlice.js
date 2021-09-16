import { ADD_FORMDATA } from "../../constants/action-types";

const initialState = {
  formData: [],
};

function formdataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FORMDATA:
      return {
        ...state,
        formData: [...state.formData, action.payload],
      };
    default:
      return state;
  }
}

export default formdataReducer;
