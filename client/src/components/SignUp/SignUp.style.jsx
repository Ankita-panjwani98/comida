import { Radio } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import  Checkbox  from '@material-ui/core/Checkbox';


export let CustomRadio = withStyles({
  root: {
    color: "#171a29",
    "&$checked": {
      color: "#171a29",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export let CustomCheckbox = withStyles({
  root: {
    color: "#171a29",
    "&$checked": {
      color: "#171a29",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "2%",
  },
  errorMessage: {
    color: "red",
    fontSize: "12px",
    fontWeight: "strong",
  },
  paper: {
    height: "auto",
    width: "auto",
    padding: "2vw",
  },
  container: {
    marginTop: "2%",
  },
  Image: {
    // margin:'auto',
    marginLeft: "40%",
    marginRight: "auto",
  },
  foodie: {
    marginTop: "2%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  SignIn: {
    cursor: "pointer",
  },
}));
