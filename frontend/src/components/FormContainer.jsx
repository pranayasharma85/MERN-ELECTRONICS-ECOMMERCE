import { Container, Row, Col } from "react-bootstrap";

export default function FormContainer({ children }) {
  // children lai props ko conditon ma lako ho 
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}
// The purpose of this component is to provide a responsive container for forms that centers the content horizontally on medium-sized screens and above. The children prop allows you to pass in any form content, which will be rendered inside the container.