import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"/>
            <img
            src="public/icon.svg"
            width="30"
            />
        </Container>
      </Navbar>
    </>
  );
}
