import { useState } from "react";
import { Gallery } from "react-grid-gallery";

import { images as IMAGES } from "./images";
import ImageToGallery from "./imageToGallery";

export default function GalleryPhotos() {
  const [images, setImages] = useState(IMAGES);

  return (
    <div>
      <Gallery
        defaultContainerWidth={300}
        enableImageSelection={false}
        images={images}
        thumbnailImageComponent={ImageToGallery}
      />
    </div>
  );
}
