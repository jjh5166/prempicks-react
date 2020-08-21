import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { StyledNavBar, StyledBrand } from './styled';

export default () => {
  return (
    <StyledNavBar expand="md" className="justify-content-between navbar-dark">
      <Container fluid>
        <StyledBrand href="/" className="d-block text-center order-0 order-md-1">PremPicks</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNav w-50 order-1 order-md-0">
          <Nav>
            <Nav.Link href="/standings">Standings</Nav.Link>
            <Nav.Link href="/mypicks">My Picks</Nav.Link>
            <Nav.Link href="/epl_table">EPL Table</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapseNav w-50 order-2">
          <Nav className="ml-auto">
            <Nav.Link href="/rules">Rules</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
};
