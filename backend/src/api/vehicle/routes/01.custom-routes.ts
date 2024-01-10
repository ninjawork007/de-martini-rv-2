export default {
  routes: [
    {
      method: "GET",
      path: "/vehicles/all",
      handler: "api::vehicle.vehicle.all",
    },
    {
      method: "GET",
      path: "/vehicles/image",
      handler: "api::vehicle.vehicle.getImages",
    },
  ],
};
