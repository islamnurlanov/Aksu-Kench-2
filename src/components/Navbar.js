import React from 'react';
import {Nav , Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar{
    background-color : #zzz;
}

.navbar-brant, .navbar.nav .nav-link{
    color: #bbb;


    &:hover {
        color:white;
    }
  }
`;


export const NavBar = () => (
    <Styles>
        <Navbar expand="sm">
        <Navbar.Brand href="/">Аксу Кенч</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
<Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
<Nav className="ml-auto">
<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/contacts">Contacts</Nav.Link></Nav.Item>

</Nav>
        </Navbar>
    </Styles>
)