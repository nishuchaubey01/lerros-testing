import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="light">
        
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto nav-bar-wrapper">

            <Link to= "/Signup">SignUP</Link>
            <Link to ="/Login">Login</Link>
            <Link to ="/Purchase">Purchase</Link>
            <Link to ="BoxDetails">BoxDetails</Link>
         
          
          </Nav>
          </Navbar>
          
    </div>
  )
}

export default Navbars
