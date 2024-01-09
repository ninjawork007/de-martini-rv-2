import React, { useEffect, useState } from "react";

import service from "../services";
import { urls } from "../services/urls";
import { Vehicle } from "../types/vehicle";

const useVehicles = (query: string) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  // get vehicles
  useEffect(() => {
    const getVehicles = async () => {
      try {
        const res = await service.get(`${urls.vehicles}${query}`);
        setVehicles(res?.data?.data);
      } catch (error) {}
    };

    getVehicles();
  }, [query]);

  return {
    vehicles,
  };
};

export default useVehicles;
