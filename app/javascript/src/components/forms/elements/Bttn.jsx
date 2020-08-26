import React from "react";
import { Button } from '@material-ui/core';

const BUTTON_COLORS = {
  'Login': '#0f8bb8',
  'Sign Up': '#8943b8',
};

export default ({ text, ...props }) => {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: BUTTON_COLORS[text]
  };
  const { disabled } = props;
  return (
    <Button
      type="submit"
      disabled={disabled}
      style={buttonStyle}
    >
      {text}
    </Button>
  );
};
