import axios from 'axios';

import {getAccessToken} from '../../../accessToken';
import goBack from '../../../routes/goBack';

export const initialValues = {
  fname: '',
  lname: '',
  email: '',
  team_name: '',
  password: '',
  password_confirmation: '',
  current_password: '',
};

export const updateFields = [
  {
    name: 'email',
    labelName: 'Email',
    isPassword: false
  },
  {
    name: 'fname',
    labelName: 'First Name',
    isPassword: false
  },
  {
    name: 'lname',
    labelName: 'Last Name',
    isPassword: false
  },
  {
    name: 'team_name',
    labelName: 'Team Name',
    isPassword: false
  },
  {
    name: 'password',
    labelName: 'New Password',
    isPassword: true
  },
  {
    name: 'password_confirmation',
    labelName: 'Confirm New Password',
    isPassword: true
  },
  {
    name: 'current_password',
    labelName: 'Current Password',
    isPassword: true
  }
];

export const UpdateFn = (data, setErrors) => {
  const auth = getAccessToken();
  axios.put('/account/update', { user: data },
  { headers: { authorization: auth }}
  )
    .then(res => {
      console.log(res);
      if (res.status == 200) {
        goBack();
      }
    }).catch(err => {
      console.log(err.response);
      setErrors([err.response.data]);
    });
};