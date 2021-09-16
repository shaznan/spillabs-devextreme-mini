// import React from "react";
import { connect } from "react-redux";
// import "devextreme/dist/css/dx.light.css";

// import { DataGrid } from "devextreme-react/data-grid";
// // import { employees } from "./employees";

// //access store data
// const mapStateToProps = (state) => {
//   return { invoiceData: state.formSubmitData };
// };

// function ItemsGrid({ invoiceData }) {
//   return (
//     <div>
//       <DataGrid dataSource={invoiceData.formData} keyExpr="orderID"></DataGrid>
//       <button onClick={() => console.log(invoiceData)}>Data grid</button>
//     </div>
//   );
// }

// const ItemsDataForm = connect(mapStateToProps)(ItemsGrid);

// export default ItemsDataForm;
import React from "react";
// import { orders } from "./data.js";
import DataGrid, {
  FilterRow,
  HeaderFilter,
  Scrolling,
} from "devextreme-react/data-grid";

//access store data
const mapStateToProps = (state) => {
  return { invoiceData: state.formSubmitData };
};

function ItemsGrid({ invoiceData }) {
  return (
    <div>
      <DataGrid
        id="gridContainer"
        columnsAutoWidth="true"
        dataSource={invoiceData.formData}
        keyExpr="orderID"
        showBorders={true}>
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
      </DataGrid>
    </div>
  );
}

const ItemsDataForm = connect(mapStateToProps)(ItemsGrid);

export default ItemsDataForm;
