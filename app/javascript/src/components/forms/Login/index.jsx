import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import axios from 'axios';

import { setAccessToken } from "../../../accessToken";
import { validationSchema } from './validate';
import TxtField from '../elements/TxtField';
import { ToastsContainer, ErrorDisplay } from '../elements/Toasts';
import Layout from "../../Layout";
import { FormContainer } from '../styled';

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#0f8bb8'
};

export default () => {
  const [errors, setErrors] = useState(null);
  let history = useHistory();
  return (
    <Layout>
      <ToastsContainer>
        {errors && <ErrorDisplay errors={errors} />}
      </ToastsContainer>
      <FormContainer>
        <h2>Login</h2>
        <Formik
          initialValues=
          {{
            email: '',
            password: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);

            axios.post(`/users/login`, { user: data })
              .then(res => {
                if (res.status == 200) {
                  console.log(res);
                  setAccessToken(res.headers.authorization);
                  history.push("/mypicks");
                }
              }).catch(err => {
                setErrors([err.response.data]);
              });
            setSubmitting(false);
          }}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form>
              <TxtField name="email" placeholder="Email" /><br />
              <TxtField name="password" placeholder="Password" isPassword={true} /><br />
              <Button type="submit" disabled={!dirty || !isValid || isSubmitting} style={buttonStyle}>Login</Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Layout >
  );
};