import { ThumbnailImageProps } from "react-grid-gallery";
import { RiHeartFill } from "react-icons/ri";

import "../../styles/imageToGallery.scss";
import { useSelector } from "react-redux";
import { useFavorites } from "../../redux/sliceFavorites";

const ImageToGallery = (props: ThumbnailImageProps) => {
  const { src, alt, style, title } = props.imageProps;
  const favoritesList = useSelector(useFavorites);

  return (
    <div>
      <RiHeartFill
        className={
          favoritesList.some((favorite) => favorite.id === props.item.key)
            ? "imageToGalleryFavorite"
            : "imageToGallery"
        }
        size={20}
      />
      <img
        width={"100%"}
        alt={alt}
        src={src}
        title={title || ""}
        style={style}
      />
    </div>
  );
};

export default ImageToGallery;
