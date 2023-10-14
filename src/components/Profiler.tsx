import { Card, Container } from "react-bootstrap";
import "../styles/generalstyles.css";
export default function Profiler() {
  return (
    <div className="center" >
      <Card  className="build-profile">
        <Card.Body>
          <Card.Title id="responsive">PC</Card.Title>
         
        </Card.Body>
      </Card>

      <Card   className="build-profile">
        <Card.Body>
          <Card.Title id="responsive">Laptop</Card.Title>
        </Card.Body>
      </Card>

    </div>
  );
}
