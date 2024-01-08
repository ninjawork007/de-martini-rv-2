const ADMIN_URL = process.env.ADMIN_URL || "http://localhost:1337";

export const baseURL = `${ADMIN_URL}/api/`;

export const urls = {
  vehicles: "vehicles",
  categories: "categories",
};
