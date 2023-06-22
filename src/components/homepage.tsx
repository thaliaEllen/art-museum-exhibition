import { Button, Col, Row } from "reactstrap";

import "../styles/homepage.scss";

export default function HomePage() {
  return (
    <Row className="containerHomepage">
      <Col lg={6}>
        <div className="containerImageHomepage">
          <img
            className="imageArtHomePage"
            src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/38926/146379/main-image"
          />
        </div>
      </Col>
      <Col
        className="d-flex flex-column justify-content-center align-items-center"
        lg={6}
      >
        <div className="titleHomepage">
          DESCUBRA A INCRÍVEL ARTE AO REDOR DO MUNDO
        </div>
        <div className="subtitleHomePage">
          A arte é uma linguagem universal que transcende barreiras e nos ajuda
          a compreender melhor a nós mesmos e ao mundo ao nosso redor. É
          interessante ver como a arte pode ser tão diversa e ao mesmo tempo tão
          unificadora. Ela nos desafia a pensar de maneira criativa e a apreciar
          a beleza em todas as suas formas.
        </div>
      </Col>
    </Row>
  );
}
