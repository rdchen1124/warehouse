import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavRoot } from '../Root';

const Navbar = () => {
  return (
    <NavRoot>
      <Nav variant="pills" defaultActiveKey="/" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="hello" disabled>Hi, User</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Shop">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="User">User</Nav.Link>
        </Nav.Item>
      </Nav>
    </NavRoot>
  )
}

export default Navbar;