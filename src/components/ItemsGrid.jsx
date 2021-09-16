import { connect } from "react-redux";
import React from "react";
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
      <h1 style={{ textAlign: "center" }}>Data Grid</h1>
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
