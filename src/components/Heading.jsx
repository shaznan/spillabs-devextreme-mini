import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    marginTop: "3rem",
  },
});

function MainHeading() {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        <h1 className={classes.heading}>DEV EXTREME PROJECT- SPIL LABS</h1>
      </div>
    </Fragment>
  );
}

export default MainHeading;
