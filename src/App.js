import React, { useState } from 'react'

import {
  Row, Col,

  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RRNavLink,
} from "react-router-dom"

import Feed from './Feed'

import logo from './logo.svg'
import './App.css'

const App = props => {
 const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="App">
      <Router>
<Navbar color="light" light expand="md">
        <NavbarBrand href="/">Talent</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="/">Feed</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/connections/">Connections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/search">Search</NavLink>
            </NavItem>

          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar className="order-3">
              <DropdownToggle nav caret>
                {'{UserName}'}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Notifications
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink tag={RRNavLink} to="/profile">
                      Profile
                   </NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Row className="App-content">
        <Col>
      <Switch>
          <Route path="/connections">
      {'Connections'}
          </Route>
          <Route path="/search">
      {'Search'}
          </Route>
          <Route path="/profile">
      {'Profile'}
          </Route>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Col>
      </Row>
      </Router>
    </div>
  )
}

export default App;
