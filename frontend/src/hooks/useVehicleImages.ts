import React, { useEffect, useState } from "react";

import service from "../services";
import { urls } from "../services/urls";
import { VehicleImage } from "../types/image";

const useVehicleImages = (query: string) => {
  const [images, setImages] = useState<VehicleImage[]>([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await service.get(`${urls.vehicleImages}${query}`);
        setImages(res?.data?.data);
      } catch (error) {}
    };

    getImages();
  }, [query]);

  return {
    images,
  };
};

export default useVehicleImages;
