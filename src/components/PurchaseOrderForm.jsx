import React, { useState, useRef } from "react";
import "devextreme/dist/css/dx.material.blue.dark.css";
import { connect } from "react-redux";
import {
  Form,
  SimpleItem,
  GroupItem,
  TabbedItem,
  Tab,
  TabPanelOptions,
  ButtonItem,
} from "devextreme-react/form";
import { addFormData } from "../reducers/actions/index";
import { v4 as uuidv4 } from "uuid";

//validate form data
const validationRules = {
  Purchase_Order_Number: [
    { type: "required", message: "Purchase Order is Required" },
  ],
};

//access store data
const mapStateToProps = (state) => {
  return { dropDownOptions: state.dropdown };
};

//dispatch store actions
const mapDispatchToProps = (dispatch) => {
  return {
    addFormData: (formData) => {
      dispatch(addFormData(formData));
    },
  };
};

//Form Component
const PurchaseOrderForm = ({ dropDownOptions, addFormData }) => {
  const testForm = useRef();
  const validateForm = (e) => {
    e.component.validate();
  };
  //store form submit data
  const [formSubmitData, setFormSubmitData] = useState(""); //FIXME: take a look here tommorow
  const submitButtonOptions = {
    text: "Submit Form",
    useSubmitBehavior: true,
  };

  //can use useRef as well to get user input , and make this a controlled input
  //get user input from form
  const formFeildDataChange = (e) => {
    setFormSubmitData(e.component.option("formData"));
  };

  //handleformsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formID = uuidv4();

    console.log(formSubmitData);

    addFormData({
      orderID: formID,
      customer: formSubmitData.Customer,
      purchaseOrder: formSubmitData.Purchase_Order_Number,
      goodsOrderReceived: formSubmitData.Goods_Received_Note_No,
      delivery: formSubmitData.Delivery_Method,
      order: formSubmitData.Order_For,
      salesOrder: formSubmitData.Sales_Order,
      externalOrderNo: formSubmitData.External_Order_Number,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "dx.material.purple.light.css",
      }}>
      <form onSubmit={handleSubmit}>
        <Form
          onContentReady={validateForm}
          onFieldDataChanged={formFeildDataChange}
          ref={testForm}>
          <GroupItem caption="Purchase Form">
            <TabbedItem>
              <TabPanelOptions height="400" width="900" />
              <Tab title="Document" colCount={2}>
                <SimpleItem
                  dataField="Purchase_Order_Number"
                  validationRules={validationRules.Purchase_Order_Number}
                />
                <SimpleItem dataField="Goods_Received_Note_No" />
                <SimpleItem dataField="External_Order_Number" />
                <SimpleItem
                  dataField="Order_For"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: dropDownOptions.orderForOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Delivery_Method"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: dropDownOptions.deliveryOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Sales_Order"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: dropDownOptions.salesOrder,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Customer"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: dropDownOptions.customerOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem dataField="PO_Date" editorType="dxDateBox" />
                <SimpleItem dataField="Required_Date" editorType="dxDateBox" />
                <SimpleItem dataField="Branch" />
                <SimpleItem dataField="Type" />
                <SimpleItem dataField="Pick_up_date" editorType="dxDateBox" />
                <SimpleItem
                  dataField="Requested_by_Admin"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: dropDownOptions.adminOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
              </Tab>
              <Tab title="Notifications" colCount={2}>
                <SimpleItem dataField="Purchase Order Number" />
                <SimpleItem dataField="Goods Received Note No" />
                <SimpleItem dataField="External Order Number" />
              </Tab>
              <Tab title="Cost calculation Method">
                <SimpleItem dataField="Purchase Order Number" />
                <SimpleItem dataField="Goods Received Note No" />
                <SimpleItem dataField="External Order Number" />
              </Tab>
            </TabbedItem>
          </GroupItem>
          <ButtonItem buttonOptions={submitButtonOptions} />
        </Form>
      </form>
    </div>
  );
};

const purchaseForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseOrderForm);

export default purchaseForm;
