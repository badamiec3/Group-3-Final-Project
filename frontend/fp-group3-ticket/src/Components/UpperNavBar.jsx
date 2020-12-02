import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { PersonFill, PlusCircleFill } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';
const UpperNavBar = () => {
return(
    <Navbar bg="light" expand="lg" sticky="top" className="navBar">
        <Navbar.Brand>
            <img 
            src="https://i.imgur.com/Wa6jdim.png"
            alt="QA Logo"
            height="32px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Link to="/">
                <Button className="ml-3 qaColButton"> Ticket Hub </Button>
            </Link>
            <Link to="/solutions">
                <Button variant="primary"className="ml-3 qaColButton"> Solutions </Button>
            </Link>
            <Link to="/sign-in">
                <Button variant="primary"className="ml-3 qaColButton"><PersonFill/> Log Out </Button>
            </Link>
            <Button variant="success"className="ml-3"><PlusCircleFill/>    New Ticket</Button>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>  

);
}
export default UpperNavBar;