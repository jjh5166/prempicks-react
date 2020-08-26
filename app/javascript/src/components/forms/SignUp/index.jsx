import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import axios from 'axios';

import nav from '../../../routes/nav';
import { validationSchema } from './validate';
import TxtField from '../elements/TxtField';
import { ToastsContainer, ErrorDisplay } from '../elements/Toasts';
import Layout from "../../Layout";
import { FormContainer } from '../styled';

const buttonStyle = {
  color: '#fff',
  backgroundColor: '#8943b8'
};

export default () => {
  const [errors, setErrors] = useState(null);
  return (
    <Layout>
      <ToastsContainer>
        {errors && <ErrorDisplay errors={errors} />}
      </ToastsContainer>
      <FormContainer>
        <h2>Sign Up</h2>
        <Formik
          initialValues=
          {{
            fname: '',
            lname: '',
            team_name: '',
            email: '',
            password: '',
            password_confirmation: ''
          }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);

            axios.post(`/users/signup`, { user: data })
              .then(res => {
                console.log(res);
                if (res.status == 201) {
                  nav("/mypicks");
                }
              }).catch(err => {
                console.log("error.res", err.response);
                setErrors(Object.values(err.response.data.errors));
              });
            setSubmitting(false);
          }}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form>
              <TxtField name="fname" placeholder="First Name" /><br />
              <TxtField name="lname" placeholder="Last Name" /><br />
              <TxtField label="Team Name" name="team_name" placeholder="Team Name" /><br />
              <TxtField name="email" placeholder="Email" /><br />
              <TxtField name="password" placeholder="Password" isPassword={true} /><br />
              <TxtField name="password_confirmation" placeholder="Password" isPassword={true} /><br />
              <Button type="submit" disabled={!dirty || !isValid || isSubmitting} style={buttonStyle}>Sign Up</Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Layout>
  );
};