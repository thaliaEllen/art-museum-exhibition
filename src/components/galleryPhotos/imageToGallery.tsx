import { ThumbnailImageProps } from "react-grid-gallery";
import { RiHeartFill } from "react-icons/ri";

import "../../styles/imageToGallery.scss";

const ImageToGallery = (props: ThumbnailImageProps) => {
  const { src, alt, style, title } = props.imageProps;

  return (
    <div>
      <RiHeartFill className="imageToGallery" size={20} />
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
