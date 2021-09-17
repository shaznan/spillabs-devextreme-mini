import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    // background: "blue",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  purchaseForm: {
    color: "black !important",
    backgroundColor: "white",
    padding: "2.5rem",
  },
  heading: {
    textAlign: "center",
  },
});

export { useStyles };
