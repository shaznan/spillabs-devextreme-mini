import React, { Fragment } from "react";
import MainHeading from "../src/components/Heading";
import "./App.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import PurchaseOrderForm from "./components/PurchaseOrderForm";
import "devextreme/dist/css/dx.material.blue.dark.css";
import ItemsGrid from "../src/components/ItemsGrid";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <MainHeading />
        <PurchaseOrderForm />
        <ItemsGrid />
      </Container>
    </Fragment>
  );
};

export default App;
