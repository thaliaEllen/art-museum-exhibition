import { useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Spinner } from "reactstrap";

import {
  addFavorites,
  removeSpecifcFavorite,
  useFavorites,
} from "../../redux/sliceFavorites";
import ImageToGallery from "./imageToGallery";

import "../../styles/imageToGallery.scss";

export default function GalleryPhotos(props: any) {
  const { listArt, loadList } = props;
  const favoritesList = useSelector(useFavorites);
  const dispatch = useDispatch();

  const manipulateFavorites = (index: number, item: any, event: any) => {
    if (favoritesList.some((favorite) => favorite.id === item.key)) {
      dispatch(removeSpecifcFavorite(item.key));
    } else {
      dispatch(addFavorites(item.key));
    }
  };

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
          onClick={manipulateFavorites}
          defaultContainerWidth={300}
          enableImageSelection={false}
          images={listArt}
          thumbnailImageComponent={ImageToGallery}
        />
      )}
    </div>
  );
}
