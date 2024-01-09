import React, { useEffect, useState } from "react";

import service from "../services";
import { urls } from "../services/urls";
import { Category } from "../types/vehicle";

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  // get categories
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await service.get(`${urls.categories}/?populate=*`);
        setCategories(res?.data?.data);
      } catch (error) {}
    };

    getCategories();
  }, []);

  return {
    categories,
  };
};

export default useCategories;
