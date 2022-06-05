import React from 'react';
import { Col } from 'react-bootstrap';

const NavRoot = (props) => {
  return (
    <Col xs={12} md={3} className="mx-0 bg-light">
      {props.children}
    </Col>
  )
}
export default NavRoot;