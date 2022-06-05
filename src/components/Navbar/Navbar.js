import React from 'react';
import { Col, Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Col xs={12} md={3} className="mx-0 bg-light">
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
    </Col>
  )
}

export default Navbar;