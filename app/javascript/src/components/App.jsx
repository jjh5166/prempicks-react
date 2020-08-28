import React from "react";
import Routes from "../routes/Index";
import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from './theme';

export default props => (
  <MuiThemeProvider theme={theme}><>{Routes}</></MuiThemeProvider>
);