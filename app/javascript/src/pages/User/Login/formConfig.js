import axios from 'axios';

import nav from '../../../routes/nav';
import { setAccessToken } from '../../../accessToken';

export const initialValues = {
  email: '',
  password: ''
};

export const loginFields = [
  {
    name: 'email',
    placeholder: 'Email',
    isPassword: false
  },
  {
    name: 'password',
    placeholder: 'Password',
    isPassword: true
  }
];

export const loginFn = (data, setErrors) => {
  axios.post(`/users/login`, { user: data })
    .then(res => {
      if (res.status == 200) {
        setAccessToken(res.headers.authorization);
        nav("/mypicks");
      }
    }).catch(err => {
      setErrors([err.response.data]);
    });
};