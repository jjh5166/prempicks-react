import React from "react";
import { Formik } from 'formik';
import { Button } from '@material-ui/core';

import { validationSchema } from './validate';
import TxtField from '../elements/TxtField';

export default () => (
  <div className="page_container hero_img">
    <div className="user_form">
      <h2>Sign Up</h2>
      <Formik
        initialValues=
        {{
          fname: '',
          lname: '',
          team_name: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <form>
            <TxtField name="fname" placeholder="First Name" /><br />
            <TxtField name="lname" placeholder="Last Name" /><br />
            <TxtField label="Team Name" name="team_name" placeholder="Team Name" /><br />
            <TxtField name="email" placeholder="Email" /><br />
            <TxtField name="password" placeholder="Password" isPassword={true} /><br />
            <TxtField name="confirmPassword" placeholder="Password" isPassword={true} /><br />
            <Button type="submit" disabled={isSubmitting}>Sign Up</Button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);