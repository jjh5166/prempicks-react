import React from "react";
import { useField } from 'formik';
import { TextField } from '@material-ui/core';

export default ({ placeholder, isPassword = false, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const password = isPassword ? "password" : "";

  return (
    <TextField
      {...field}
      helperText={errorText}
      error={!!errorText}
      placeholder={placeholder}
      type={password}
    />
  );
};