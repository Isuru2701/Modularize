import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/header.css";
function BrandExample() {
  return (
    <>
      <Navbar id="header" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./icon.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Modularize
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;