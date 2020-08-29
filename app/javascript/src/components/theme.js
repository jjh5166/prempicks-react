import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        color: '#fff',
      },
      underline: {
        "&:before": {
          // normal
          borderBottom: `1px solid #fff`,
        },
        "&:after": {
          // focused
          borderBottom: `2px solid #fff`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          //hover
          borderBottom: `2px solid #fff`,
        },
      }
    },
    MuiInputLabel: {
      root: {
        color: '#fff',
        "&$focused": {
          "color": "#fff"
        }
      },

    }
  }
});