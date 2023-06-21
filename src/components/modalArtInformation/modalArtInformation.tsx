import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap";

import "../../styles/modalArtInformation.scss";

function ModalArtInformation(props: any) {
  const { modalInformationView, openCloseModalInformation, informationArt } =
    props;

  useEffect(() => {
    console.log(informationArt);
  }, []);

  return (
    <Modal
      isOpen={modalInformationView}
      toggle={openCloseModalInformation}
      fullscreen
    >
      <ModalHeader
        style={{ marginBottom: "2rem" }}
        toggle={openCloseModalInformation}
      >
        Detalhes da obra
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col lg={6} xs={12}>
            <div className="containerImage">
              <img className="imageArt" src={informationArt.src} />
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="textInformational">
              <strong>Título:</strong> {informationArt.caption}
            </div>

            <div className="textInformational">
              <strong>Artista:</strong>{" "}
              {informationArt.generalInfo.artistDisplayName}
            </div>
            <div className="textInformational">
              <strong>Data:</strong> {informationArt.generalInfo.objectDate}
            </div>
            <div className="textInformational">
              <strong>Classificação:</strong>{" "}
              {informationArt.generalInfo.classification}
            </div>

            <div className="textInformational">
              <strong>Meio:</strong> {informationArt.generalInfo.medium}
            </div>

            <div className="textInformational">
              <strong>Departamento:</strong>{" "}
              {informationArt.generalInfo.department}
            </div>
            <div className="textInformational">
              <strong>Linha de Crédito:</strong>{" "}
              {informationArt.generalInfo.creditLine}
            </div>

            <div className="textInformational">
              <strong>Número de Adesão:</strong>{" "}
              {informationArt.generalInfo.accessionNumber}
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}

export default ModalArtInformation;
