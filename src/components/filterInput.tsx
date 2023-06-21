import { Container, Row, Col, Input, Button } from "reactstrap";

import "../styles/filterInput.scss";
import FilterArtListForTitleAndArtist from "../services/filterArtListForTitleAndArtist";
import SearchArtObject from "../services/searchArtObject";

function FilterInput(props: any) {
  const { setListArt, setLoadList } = props;

  async function filter() {
    setLoadList(true);
    const listArtId = await FilterArtListForTitleAndArtist(
      false,
      true,
      "Van Gogh"
    );
    const lisArtObjects = await SearchArtObject(listArtId);
    setListArt(lisArtObjects);
    setLoadList(false);
  }

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
          <Button onClick={() => filter()} color="secondary">
            Procurar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default FilterInput;
