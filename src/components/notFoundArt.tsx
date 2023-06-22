import { Col, Row } from "reactstrap";

import "../styles/imageToGallery.scss";

export default function NotFoundArt() {
  return (
    <Col>
      <Row className="containerLoadImage">
        <strong className="textLoad">Obras de arte não encontradas</strong>
      </Row>
    </Col>
  );
}
