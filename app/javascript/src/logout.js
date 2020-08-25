import axios from 'axios';

import { setAccessToken, getAccessToken } from './accessToken';

const logout = () => {
  const auth = getAccessToken();
  axios.delete(`/logout`, {
    headers: { authorization: auth }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  setAccessToken("");
};

export default logout;