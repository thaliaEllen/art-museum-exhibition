import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Col, Row, Spinner } from "reactstrap";

import ImageToGallery from "./imageToGallery";

import "../../styles/imageToGallery.scss";
import ModalArtInformation from "../modalArtInformation/modalArtInformation";

export default function GalleryPhotos(props: any) {
  const { listArt, loadList } = props;

  return (
    <div>
      {loadList ? (
        <Col>
          <Row className="containerLoadImage">
            <Spinner>Loading...</Spinner>
          </Row>
          <Row className="containerLoadImage">
            <strong>Procurando obras de arte ...</strong>
          </Row>
        </Col>
      ) : (
        <Gallery
          defaultContainerWidth={300}
          enableImageSelection={false}
          images={listArt}
          thumbnailImageComponent={ImageToGallery}
        />
      )}
    </div>
  );
}
