import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F2F2F2',
    },
    secondary: {
      main: '#FF462C',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F2F2F2',
    },
  },
});

export default theme;
