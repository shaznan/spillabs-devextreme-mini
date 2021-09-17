import { connect } from "react-redux";
import React from "react";

import { makeStyles } from "@material-ui/core";

import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  Scrolling,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  ColumnChooser,
} from "devextreme-react/data-grid";
//access store data
const mapStateToProps = (state) => {
  return { invoiceData: state.formSubmitData };
};

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
});

function ItemsGrid({ invoiceData }) {
  const classes = useStyles();
  return (
    <div className={classes.gridContainer}>
      <h1 className={classes.heading}>Data Grid</h1>
      <DataGrid
        id="gridContainer"
        columnsAutoWidth="true"
        columnHidingEnabled={true}
        height="25rem"
        width="auto"
        dataSource={invoiceData.formData}
        keyExpr="orderID"
        showBorders={true}>
        <Grouping contextMenuEnabled={true} expandMode="rowClick" />
        <GroupPanel visible={true} emptyPanelText="Invoice overview" />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Scrolling mode="infinite" />
        <Pager
          allowedPageSizes={[1]}
          showInfo={true}
          showNavigationButtons={true}
          showPageSizeSelector={true}
          visible={true}
        />
        <Paging defaultPageSize={8} />
        <ColumnChooser enabled={true} mode="select" />
        <Column
          allowGrouping={false}
          dataField="orderID"
          width={130}
          caption="orderID"
        />
        <Column dataField="customer" caption="customer" />
        <Column dataField="purchaseOrder" />
        <Column dataField="goodsOrderReceived" dataType="date" />
        <Column dataField="delivery" format="currency" />
        <Column dataField="order" format="currency" />
        <Column dataField="salesOrder" format="currency" />
        <Column dataField="externalOrderNo" format="currency" />
      </DataGrid>
    </div>
  );
}

const ItemsDataForm = connect(mapStateToProps)(ItemsGrid);

export default ItemsDataForm;
