import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';





export default function Header() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="#">
          <Link to={'/RenteeMain'}>
          <div style={{color:'#cc5500'}}>Rentyoyo</div>
          </Link>
          </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            
            navbarScroll >
             <div className='Input-bar'>
              <input className='Input-Search' placeholder='Type here'/>
              <button className='Search-button'>Search</button>
            </div>
            <div className='renterBtn'>
              <Link to={'/LoginPage'}>
            <Nav.Link href="#action1">Login / SignUp</Nav.Link>
            </Link>
            <div>
            <button className='Renter-Secbutton'>Become a Renter</button>
            </div>
            </div>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
