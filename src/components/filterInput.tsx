import { Container, Row, Col, Input, Button, FormGroup } from "reactstrap";
import "../styles/filterInput.scss";

function FilterInput() {
  return (
    <Container className="containerFilter">
      <Row className="filterContainer">
        <Col lg={2}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Nome</option>
            <option>Artista</option>
            <option>Local</option>
          </Input>
        </Col>
        <Col lg={5}>
          <Input />
        </Col>
        <Col lg={1}>
          <Button color="secondary">Procurar</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FilterInput;
