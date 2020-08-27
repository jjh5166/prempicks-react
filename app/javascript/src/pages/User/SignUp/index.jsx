import React from "react";
import UserForm from '../../../components/forms/User';

import Layout from '../../../components/Layout';
import { initialValues, signupFields, SignupFn } from './formConfig';
import { validationSchema } from './validate';

export default () => (
  <Layout hideNav={true}>
    <UserForm
      name="Sign Up"
      initialValues={initialValues}
      validationSchema={validationSchema}
      submitFn={SignupFn}
      fields={signupFields}
    />
  </Layout>
);