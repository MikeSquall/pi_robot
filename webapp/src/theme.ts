import { createMuiTheme } from "@material-ui/core";

const lightGrey = '#e6e6e6';
const darkGrey = '#1c1c1c';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: darkGrey,
      paper: lightGrey,
    },
  }
});
