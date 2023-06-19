import { ThumbnailImageProps } from "react-grid-gallery";
import { RiHeartFill } from "react-icons/ri";

import "../../styles/imageToGallery.scss";

const ImageToGallery = (props: ThumbnailImageProps) => {
  const { src, alt, style, title } = props.imageProps;

  return (
    <div style={{ ...style, textAlign: "center" }}>
      <div className="imageToGallery">
        <div className="teste2">
          <RiHeartFill className="teste3" color="red" size={20} />
        </div>
      </div>
      <img alt={alt} src={src} title={title || ""} style={style} />
    </div>
  );
};

export default ImageToGallery;
