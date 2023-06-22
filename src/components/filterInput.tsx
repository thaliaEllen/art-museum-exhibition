import { useState } from "react";
import { Container, Row, Col, Input, Button, FormGroup } from "reactstrap";

import "../styles/filterInput.scss";
import FilterArtListForTitleAndArtist from "../services/filterArtListForTitleAndArtist";
import SearchArtObject from "../services/searchArtObject";

function FilterInput(props: any) {
  const { setListArt, setLoadList } = props;
  const [filterSearch, setFilterSearch] = useState("");
  const [typeFilterSearch, setTypeFilterSearch] = useState("Nome");

  async function filter() {
    setLoadList(true);
    const listArtId = await FilterArtListForTitleAndArtist(
      typeFilterSearch == "Nome" ? true : false,
      typeFilterSearch == "Artista" ? true : false,
      typeFilterSearch == "Local" ? true : false,
      filterSearch
    );
    const lisArtObjects = await SearchArtObject(listArtId);
    setListArt(lisArtObjects);
    setLoadList(false);
  }

  return (
    <Container className="containerFilter">
      <Row className="filterContainer">
        <Col lg={2}>
          <FormGroup>
            <Input
              type="select"
              value={typeFilterSearch}
              onChange={(e) => setTypeFilterSearch(e.target.value)}
              name="select"
              id="exampleSelect"
            >
              <option>Nome</option>
              <option>Artista</option>
              <option>Local</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg={5}>
          <FormGroup>
            <Input
              name="inputSearchFilter"
              onChange={(e) => setFilterSearch(e.target.value)}
            />
          </FormGroup>
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
