
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Zaru Fashion - Product Turnover</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
