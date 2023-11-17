import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">TypeScript</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
