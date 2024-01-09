export default {
  routes: [
    {
      method: "GET",
      path: "/vehicles/all",
      handler: "api::vehicle.vehicle.all",
    },
  ],
};
