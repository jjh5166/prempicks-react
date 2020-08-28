import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserForm from '../../../components/forms/User';

import Layout from '../../../components/Layout';
import { getAccessToken } from '../../../accessToken';
import nav from '../../../routes/nav';
import { updateFields, UpdateFn, initialValues } from './formConfig';
import { validationSchema } from './validate';
function setInitialValues(data) {
  return {
    ...data,
    password: '',
    password_confirmation: '',
    current_password: ''
  };
}
export default () => {
  const auth = getAccessToken();
  const [userInfo, setUserInfo] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          '/users/info', {
          headers: { authorization: auth }
        }
        );
        setUserInfo(setInitialValues(result.data));
        setIsLoading(false);
      } catch (err) {
        if (err.response.status == 401) {
          nav('/');
        }
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      {
        !isLoading &&
        <UserForm
          name="Update Account"
          initialValues={userInfo}
          validationSchema={validationSchema}
          submitFn={UpdateFn}
          fields={updateFields}
        />
      }
    </Layout>
  );
};