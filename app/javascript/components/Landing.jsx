import React from "react";
import { Link } from 'react-router-dom';

export default () => (
  <div className="page_container hero_img">
    <h1 className="home_header">Prem Picks</h1>
    <div className="landing_buttons">
      <Link to="/login" className="btn landing-btn">Log In</Link>
      <Link to="/signup" className="btn landing-btn">Sign Up</Link>
    </div>
  </div>
);