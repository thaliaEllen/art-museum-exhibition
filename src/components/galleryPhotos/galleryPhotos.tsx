import { useState } from "react";
import { Gallery } from "react-grid-gallery";

import { images as IMAGES } from "./images";
import ImageToGallery from "./imageToGallery";

export default function GalleryPhotos() {
  const [images, setImages] = useState(IMAGES);
  const hasSelected = images.some((image: any) => image.isSelected);

  const handleSelect = (index: number) => {
    const nextImages = images.map((image: any, i: number) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    );
    setImages(nextImages);
  };

  const handleSelectAllClick = () => {
    const nextImages = images.map((image: any) => ({
      ...image,
      isSelected: !hasSelected,
    }));
    setImages(nextImages);
  };

  return (
    <div>
      <div className="p-t-1 p-b-1">
        <button onClick={handleSelectAllClick}>
          {hasSelected ? "Clear selection" : "Select all"}
        </button>
      </div>
      <Gallery
        defaultContainerWidth={300}
        enableImageSelection={false}
        images={images}
        onSelect={handleSelect}
        thumbnailImageComponent={ImageToGallery}
      />
    </div>
  );
}
