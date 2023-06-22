import { Gallery } from "react-grid-gallery";
import { Col, Row, Spinner } from "reactstrap";

import ImageToGallery from "./imageToGallery";

import "../../styles/imageToGallery.scss";

export default function GalleryPhotos(props: any) {
  const { listArt, loadList, results } = props;

  return (
    <div>
      {loadList ? (
        <Col>
          <Row className="containerLoadImage">
            <Spinner>Loading...</Spinner>
          </Row>
          {results > 1 ? (
            <Row className="containerLoadImage">
              <strong className="textLoad">
                Aguardando {results} resultados
              </strong>
            </Row>
          ) : (
            <Row className="containerLoadImage">
              <strong className="textLoad">Procurando obras de arte ...</strong>
            </Row>
          )}
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
