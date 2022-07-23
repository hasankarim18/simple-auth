import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)

    }

    return (
        <Navbar className="container" color="dark" dark expand="md">
            <NavbarBrand href="/">Simple auth</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className="justify-content-end" isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        props.isLoggedIn && (
                            <NavItem>
                                <NavLink href="#">User</NavLink>
                            </NavItem>
                        )
                    }
                    {
                        props.isLoggedIn && (
                            <NavItem>
                                <NavLink href="#">Admin</NavLink>
                            </NavItem>
                        )
                    }
                    {
                        props.isLoggedIn && (

                            <NavItem>
                                <a onClick={props.onLogout} className="btn btn-danger" href="#">Logout</a>
                            </NavItem>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation