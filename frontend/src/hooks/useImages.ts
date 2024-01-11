import React, { useEffect, useState } from "react";

import service from "../services";
import { urls } from "../services/urls";
import { ImageMedia } from "../types/image";

const useImages = (query: string) => {
  const [images, setImages] = useState<ImageMedia[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await service.get(`${urls.images}${query}`);
        setImages(res?.data?.data);
      } catch (error) {}
    };

    getImages();
  }, [query]);

  return {
    images,
  };
};

export default useImages;
