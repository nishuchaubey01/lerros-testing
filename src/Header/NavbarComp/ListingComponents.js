import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'
import { Router ,NavLink} from 'react-router-dom'
const ListingComponents = () => {
  return (
    <div>
      <Navbar bg="dark" variant="light">
        
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper">

            {/* <Link>SignUP</Link>
            <Link >Login</Link>
            <Link >Purchase</Link>
            <Link >BoxDetails</Link> */}
            <Router>

            <NavLink to= "/Signup">SignUP</NavLink>
            <NavLink to ="/Login">Login</NavLink>
            <NavLink to ="/Purchase">Purchase</NavLink>
            <NavLink to ="BoxDetails">BoxDetails</NavLink>
         
            </Router>
          </Nav>
          </Navbar>
          
    </div>
  )
}

export default ListingComponents ;
