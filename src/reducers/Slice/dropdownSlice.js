//usually this data will be stored in the database
const initialState = {
  orderForOptions: ["Individual", "SME", "Large Enterprise"],
  deliveryOptions: ["Delivery", "Pick-up"],
  salesOrder: ["Invoice 1", "Invoice 2", "Invoice 3"],
  customerOptions: ["Shaznan", "Nuwan", "Siraj", "Malinda"],
  adminOptions: ["Admin 1", "Admin 2", "Admin 3"],
};

// incase I want to update my dropdown menu, then i'll go ahead and add reducers
function dropdownReducer(state = initialState, action) {
  return state;
}

export default dropdownReducer;
