import { ADD_FORMDATA } from "../../constants/action-types";

export function addFormData(payload) {
  return { type: ADD_FORMDATA, payload };
}
