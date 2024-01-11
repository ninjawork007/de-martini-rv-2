import React from "react";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

interface ImageGalleryProps {
  images: ReactImageGalleryItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div>
      <ReactImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default ImageGallery;
