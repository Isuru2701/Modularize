import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BusinessName from "./BusinessName";

export default function AppHeader() {
  return (
    <div>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src="icon.svg"
                width="50"
                className="d-inline-block align-top"
              /><BusinessName/> {" "}
              
            </Navbar.Brand>
          </Container>
        </Navbar>
    </div>
  );
}
