import React from "react";
import UserForm from '../../../components/forms/User';

import { initialValues, loginFields, loginFn } from './formConfig';
import { validationSchema } from './validate';

export default () => (
  <UserForm
    name="Login"
    initialValues={initialValues}
    validationSchema={validationSchema}
    submitFn={loginFn}
    fields={loginFields}
  />
);