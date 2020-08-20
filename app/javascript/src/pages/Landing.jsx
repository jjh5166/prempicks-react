import React from "react";
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1 className="home_header">Prem Picks</h1>
    <div className="landing_buttons">
      <Link to="/login" className="btn btn-std landing-btn">Log In</Link>
      <Link to="/signup" className="btn btn-std landing-btn">Sign Up</Link>
    </div>
  </Layout>
);