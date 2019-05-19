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
<Nav.Item><Nav.Link href="/">Услуги</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/about">Прайс</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/akci">Акции</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/galerai">Галерея</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link href="/contacts">Контакты</Nav.Link></Nav.Item>

</Nav>
        </Navbar>
    </Styles>
)