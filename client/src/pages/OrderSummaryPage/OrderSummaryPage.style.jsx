import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "4%",
  },
  paper: {
    height: "auto",
    padding: "2vw",
  },
  orderBackground: {
    padding: "20px",
  },
  table: {
    minWidth: "auto",
    padding: "10%",
  },
  sectionGrid: {
    margin: "20px",
  },
  centralBorder: {
    borderBottom: "2px solid #171A29",
  },
  onlyOrderSummaryDisplay: {
    marginTop: "2%",
    width: "60%",
  },
  Title: {
    textAlign: 'center',
    marginTop: "2%",
    color: "#171a29",
  },

}));
