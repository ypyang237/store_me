import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class GlobalHeader extends Component {
  renderNavbar() {
    return(
        <header>
          <Navbar fluid fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link href="/">
                  <a>
                    Store Me
                  </a>
                </Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem href="/"  eventKey={2} >Home</NavItem>
                <NavItem href="/customer"  eventKey={2} >Customer Journey</NavItem>
                <NavItem href="/host"  eventKey={2} >Host Dashboard</NavItem>
                <NavItem href="/listings" eventKey={3} >Listings</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
    )
  }
  render() {
    return (
      <div>
        <Head>
          <title>Store Me</title>
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap-compile.css" />
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        </Head>
        {this.renderNavbar()}
        <div style={{width: '100%', marginTop: '71px'}}></div>
      </div>
    );
  };
}


export default GlobalHeader;
