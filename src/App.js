import React, { Fragment } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import PurchaseOrderForm from "./components/PurchaseOrderForm";
import "devextreme/dist/css/dx.material.blue.light.compact.css";
import ItemsGrid from "../src/components/ItemsGrid";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles/appStyles";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={4} className={classes.container}>
          <Grid item sm={12}>
            <Grid container spacing={4}>
              <Grid item md={6} sm={12}>
                <PurchaseOrderForm />
              </Grid>
              <Grid item md={6} sm={12}>
                <ItemsGrid />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
