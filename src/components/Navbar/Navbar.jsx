import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbarr() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand='md' className="" style={{ backgroundColor: '#1D1E1F' }}>
        <Container fluid>
          <Navbar.Brand className='text-white' href="#">DMSV ACADEMY</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md}`} className="custom-navbar-toggle" onClick={handleShow} />
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-$md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-$md`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="custom-close-button">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$md`} className='text-white'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/' className={(navData) => navData.isActive ? 'nav-link text-white active' : 'nav-link text-white'} onClick={handleClose}>Home</NavLink>
                <NavLink to='/courses' className={(navData) => navData.isActive ? 'nav-link text-white active' : 'nav-link text-white'} onClick={handleClose}>Courses</NavLink>
                <NavLink to='/podcasts' className={(navData) => navData.isActive ? 'nav-link text-white active' : 'nav-link text-white'} onClick={handleClose}>podcasts</NavLink>
              
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;