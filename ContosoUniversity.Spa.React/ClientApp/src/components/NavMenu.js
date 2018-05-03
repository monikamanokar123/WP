﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Contoso University</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        <LinkContainer to={'/'} exact>
              <NavItem>Home</NavItem>
          </LinkContainer>
          <NavItem eventKey={2} href="#">About</NavItem>
          <NavItem eventKey={3} href="#">Contact</NavItem>
            <NavDropdown eventKey={3} title="Academic" id="basic-nav-dropdown">
            <LinkContainer to={'/departments'}>
              <MenuItem>
                <Glyphicon glyph='education' /> Departments
              </MenuItem>
            </LinkContainer>
            <LinkContainer to={'/courses'}>
              <MenuItem>
                <Glyphicon glyph='education' /> Courses
              </MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={4} href="#">Register</NavItem>
          <NavItem eventKey={5} href="#">Log in</NavItem>          
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
