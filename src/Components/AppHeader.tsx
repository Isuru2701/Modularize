import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function AppHeader() {
  return (
    <>
      <header>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src="icon.svg"
                width="50"
                className="d-inline-block align-top"
              />
              
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
