import React from 'react';
import { Col } from 'react-bootstrap';

const MainRoot = (props) => {
  return (
    <Col xs={12} md={9} className="mx-0">
      {props.children}
    </Col>
  )
}
export default MainRoot;