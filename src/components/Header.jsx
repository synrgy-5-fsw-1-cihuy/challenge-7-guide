import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  const navigations = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          {navigations.map((navigation, index) => (
            <Nav.Link key={index + navigation.name}>
              <Link to={navigation.path}>{navigation.name}</Link>
            </Nav.Link>
          ))}

          {/* Sebenernya ini sama aja kayak yang diatas, cuma yang diatas lebih singka (sebenernya males aja sih ngulangin hal yang sama soalnya ada patternnya) */}
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile">Profile</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
