import { Card, Container } from "react-bootstrap";
import "../styles/generalstyles.css";
export default function Profiler() {
  return (
    <div className="center" >
      <Card  className="build-profile">
        <Card.Body>
          <Card.Title>PC</Card.Title>
         
        </Card.Body>
      </Card>

      <Card   className="build-profile">
        <Card.Body>
          <Card.Title>Laptop</Card.Title>
        </Card.Body>
      </Card>

    </div>
  );
}
