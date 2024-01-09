import React, { useEffect, useState } from "react";

import service from "../services";
import { urls } from "../services/urls";
import { Vehicle } from "../types/vehicle";

const useVehicle = (id: string) => {
  const [vehicle, setVehicle] = useState<Vehicle>();

  useEffect(() => {
    const getVehicle = async () => {
      try {
        const res = await service.get(`${urls.vehicles}/${id}?populate=*`);
        setVehicle(res?.data?.data);
      } catch (error) {}
    };

    if (id) getVehicle();
  }, [id]);

  return {
    vehicle,
  };
};

export default useVehicle;
