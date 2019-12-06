import React from 'react';
import {useDispatch} from 'react-redux';
import { Navbar, Nav, } from 'react-bootstrap';
import { userDataSelector } from '../store/user/selectors';
import { useSelector } from 'react-redux';
import { signOut } from '../store/user/actions';

export default function NavBar() {
    const dispatch = useDispatch();
    const user = useSelector(userDataSelector);
    const role = user.role;

    const handleSignOut = () => {
        dispatch(
            signOut({
                'id': '',
                'firstName': '',
                'lastName': '',
                'email': '',
                'firstLog': '',
                'role': 'ROLE_USER'
            })
        );
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Clinic Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {role === 'ROLE_USER' && <Nav.Link href="/login">Login</Nav.Link>}
                    {role === 'ROLE_USER' && <Nav.Link href="/signup">Sign Up</Nav.Link>}
                    {role !== 'ROLE_USER' && <Nav.Link href="#" onClick={() => handleSignOut()}>Sign out</Nav.Link>}
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
}

