import axios from 'axios';

import { setAccessToken, getAccessToken } from './accessToken';
import nav from './routes/nav';

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
  nav('/');
};

export default logout;