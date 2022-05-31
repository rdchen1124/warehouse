import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const Header = ()=>{
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Warehouse System
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;