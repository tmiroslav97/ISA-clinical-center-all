import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import {userDataSelector} from '../store/user/selectors';
import {useSelector} from 'react-redux';

export default function NavBar() {
    // esling-disable-next-line
    const user = useSelector(userDataSelector);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Clinic Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/CA">Clinic adm</Nav.Link>
                    <Nav.Link href="/probs">Proba</Nav.Link>
                </Nav>
                
                <Nav className="ml-auto">
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
                
                
            </Navbar.Collapse>
        </Navbar>

    );
  }
 
