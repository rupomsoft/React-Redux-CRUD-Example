import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const AppNavBar = () => {
    return (
        <div className="mb-4">
            <Navbar className="shadow-sm" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="mx-3" to="/">Read</NavLink>
                        <NavLink className="mx-3" to="/create">Create</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavBar;