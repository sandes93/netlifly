import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs() {
  return (
    <div>
      <Navbar 
      bg="dark" 
      variant="dark"
      >
        <Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="About">About</Nav.Link>

          <Nav.Link href="Projects">Projects</Nav.Link>

          <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavTabs;
