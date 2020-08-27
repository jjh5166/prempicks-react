import React, { useState, Fragment } from "react";
import { Formik, Form } from 'formik';

import { FormContainer } from './styled';
import Layout from '../../Layout';
import FormFields from '../elements/FormFields';
import Bttn from '../elements/Bttn';
import { ToastsContainer, ErrorDisplay } from '../elements/Toasts';

const UserForm = ({ name, initialValues, validationSchema, submitFn, fields }) => {
  const [errors, setErrors] = useState(null);
  return (
    <Fragment>
      <ToastsContainer>
        {errors && <ErrorDisplay errors={errors} />}
      </ToastsContainer>
      <FormContainer>
        <h2>{name}</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            submitFn(data, setErrors);
            setSubmitting(false);
          }}
        >
          {({ dirty, isValid, isSubmitting }) => (
            <Form>
              <FormFields fields={fields} />
              <Bttn text={name} disabled={!dirty || !isValid || isSubmitting} />
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Fragment>
  );
};

export default UserForm;