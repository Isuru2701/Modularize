import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/header.css";
export default function Navigation() {
  return (
    <>
      <Navbar className="bg-body-tertiary navbar-custom" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id="brand">
            <img
              alt=""
              src="./icon.svg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span id="brand">Modularize</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
