import React, { useState } from "react";
import "devextreme/dist/css/dx.light.css";

import {
  Form,
  SimpleItem,
  GroupItem,
  TabbedItem,
  Tab,
  TabPanelOptions,
  ButtonItem,
} from "devextreme-react/form";

//FIXME: store in useContext API
const orderForOptions = ["Individual", "SME", "Large Enterprise"];
const deliveryOptions = ["Delivery", "Pick-up"];
const salesOrder = ["Invoice 1", "Invoice 2", "Invoice 3"];
const customerOptions = ["Shaznan", "Nuwan", "Siraj", "Malinda"];
const adminOptions = ["Admin 1", "Admin 2", "Admin 3"];

const validationRules = {
  Purchase_Order_Number: [
    { type: "required", message: "Purchase Order is Required" },
  ],
};

const DocumentForm = () => {
  const validateForm = (e) => {
    e.component.validate();
  };

  const [formData, setFormData] = useState("");
  const submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true,
  };

  const formFeildDataChange = (e) => {
    setFormData(e.component.option("formData"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Form
          onContentReady={validateForm}
          onFieldDataChanged={formFeildDataChange}>
          <GroupItem caption="Purchase Form">
            <TabbedItem>
              <TabPanelOptions height="400" width="900" />
              <Tab title="Document" colCount={2}>
                <SimpleItem
                  dataField="Purchase_Order_Number"
                  validationRules={validationRules.Purchase_Order_Number}
                />
                <SimpleItem dataField="Goods Received Note No" />
                <SimpleItem dataField="External Order Number" />
                <SimpleItem
                  dataField="Order For"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: orderForOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Delivery Method"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: deliveryOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Sales Order"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: salesOrder,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem
                  dataField="Customer"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: customerOptions,
                    searchEnabled: true,
                    value: "",
                  }}
                />
                <SimpleItem dataField="PO Date" editorType="dxDateBox" />
                <SimpleItem dataField="Required Date" editorType="dxDateBox" />
                <SimpleItem dataField="Branch" />
                <SimpleItem dataField="Type" />
                <SimpleItem dataField="Pick up date" editorType="dxDateBox" />
                <SimpleItem
                  dataField="Requested by Admin"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: adminOptions,
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

export default DocumentForm;
