import React from "react";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { StyledNavBar, StyledBrand } from './styled';
import logout from '../../logout';
export default () => {
  return (
    <StyledNavBar expand="md" className="justify-content-between navbar-dark">
      <Container fluid>
        <StyledBrand href="/" className="d-block text-center order-0 order-md-1">PremPicks</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNav w-50 order-1 order-md-0">
          <Nav>
            <Link to="/standings" className="nav-link">Standings</Link>
            <Link to="/mypicks" className="nav-link">My Picks</Link>
            <Link to="/epl_table" className="nav-link">EPL Table</Link>
            <Link to="/schedule" className="nav-link">Schedule</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapseNav w-50 order-2">
          <Nav className="ml-auto">
            <Link to="/rules" className="nav-link">Rules</Link>
            <Link to="/account" className="nav-link">Account</Link>
            <Nav.Link onClick={() => { logout(); }}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
};
