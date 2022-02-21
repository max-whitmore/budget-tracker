import React from 'react'
import { Container, Navbar } from "react-bootstrap"


const Header = () => {
  return (
    <>
    <Navbar>
  <Container className="nav-container">
    <Navbar.Brand href="/">Budget Tracker</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="https://maxw.dev" className="mw-link">MW</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header