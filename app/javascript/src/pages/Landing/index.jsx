import React from "react";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Layout from '../../components/Layout';
import { BigTitle, LandingButtons } from './styled';

const style = {
  button: {
    display: 'block',
    margin: '0 auto',
    color: '#fff',
    width: 'fit-content',
    border: 'solid white 1px',
    margin: '5%',
    fontSize: '2em',
    padding: ' 0.375rem 0.75rem',
    borderRadius: '0.25rem'
  }
};

export default () => (
  <Layout hideNav={true}>
    <BigTitle>Prem Picks</BigTitle>
    <LandingButtons>
      <NavLink to="/login" as={Button} style={style.button}>Log In</NavLink>
      <NavLink to="/signup" as={Button} style={style.button}>Sign Up</NavLink>
    </LandingButtons>
  </Layout>
);