import { ThumbnailImageProps } from "react-grid-gallery";
import { RiHeartFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/imageToGallery.scss";
import {
  addFavorites,
  removeSpecifcFavorite,
  useFavorites,
} from "../../redux/sliceFavorites";
import ModalArtInformation from "../modalArtInformation/modalArtInformation";
import { useState } from "react";

const ImageToGallery = (props: ThumbnailImageProps) => {
  const { src, alt, style, title } = props.imageProps;
  const favoritesList = useSelector(useFavorites);
  const dispatch = useDispatch();
  const [modalInformationView, setModalInformationView] = useState(false);

  const openCloseModalInformation = () =>
    setModalInformationView(!modalInformationView);

  function manipulateFavorites() {
    if (favoritesList.some((favorite) => favorite.id === props.item.key)) {
      dispatch(removeSpecifcFavorite(props.item.key as number));
    } else {
      dispatch(addFavorites(props.item.key as number));
    }
  }

  return (
    <div>
      <RiHeartFill
        onClick={() => manipulateFavorites()}
        className={
          favoritesList.some((favorite) => favorite.id === props.item.key)
            ? "imageToGalleryFavorite"
            : "imageToGallery"
        }
        size={20}
      />
      <img
        onClick={openCloseModalInformation}
        width={"100%"}
        alt={alt}
        src={src}
        title={title || ""}
        style={style}
      />
      <ModalArtInformation
        informationArt={props.item}
        modalInformationView={modalInformationView}
        openCloseModalInformation={openCloseModalInformation}
      />
    </div>
  );
};

export default ImageToGallery;
