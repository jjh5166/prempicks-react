import axios from 'axios';

import nav from '../../../routes/nav';
import { setAccessToken } from '../../../accessToken';


export const initialValues = {
  fname: '',
  lname: '',
  team_name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

export const signupFields = [
  {
    name: 'fname',
    placeholder: 'First Name',
    isPassword: false
  },
  {
    name: 'lname',
    placeholder: 'Last Name',
    isPassword: false
  },
  {
    name: 'team_name',
    placeholder: 'Team Name',
    isPassword: false
  },
  {
    name: 'email',
    placeholder: 'Email',
    isPassword: false
  },
  {
    name: 'password',
    placeholder: 'Password',
    isPassword: true
  },
  {
    name: 'password_confirmation',
    placeholder: 'Password',
    isPassword: true
  }
];

export const SignupFn = (data, setErrors) => {
  axios.post(`/users/signup`, { user: data })
    .then(res => {
      console.log(res);
      if (res.status == 201) {
        setAccessToken(res.headers.authorization);
        nav("/mypicks");
      }
    }).catch(err => {
      setErrors(Object.values(err.response.data.errors));
    });
};