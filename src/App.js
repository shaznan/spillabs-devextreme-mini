import React, { Fragment } from "react";
import MainHeading from "../src/components/Heading";
import "./App.css";
import Container from "@material-ui/core/Container";
import Navbar from "./components/Navbar";
import DocumentForm from "./components/DocumentForm";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <MainHeading />
        <DocumentForm />
      </Container>
    </Fragment>
  );
};

export default App;
