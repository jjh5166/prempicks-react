import React from "react";
import UserForm from '../../../components/forms/User';

import Layout from '../../../components/Layout';
import { initialValues, loginFields, loginFn } from './formConfig';
import { validationSchema } from './validate';

export default () => (
  <Layout hideNav={true}>
    <UserForm
      name="Login"
      initialValues={initialValues}
      validationSchema={validationSchema}
      submitFn={loginFn}
      fields={loginFields}
    />
  </Layout>
);