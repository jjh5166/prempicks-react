import React from "react";
import UserForm from '../../../components/forms/User';

import { initialValues, signupFields, SignupFn } from './formConfig';
import { validationSchema } from './validate';

export default () => (
  <UserForm
    name="Sign Up"
    initialValues={initialValues}
    validationSchema={validationSchema}
    submitFn={SignupFn}
    fields={signupFields}
  />
);