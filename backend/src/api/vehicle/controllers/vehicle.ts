/**
 * vehicle controller
 */

import { factories } from "@strapi/strapi";

module.exports = factories.createCoreController(
  "api::vehicle.vehicle",
  ({ strapi }) => ({
    async all(ctx) {
      const vehicles = await strapi.entityService.findMany(
        "api::vehicle.vehicle",
        {
          fields: ["make", "model"],
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(vehicles, ctx);
      return this.transformResponse(sanitizedEntity);
    },
    async getImages(ctx) {
      const images = await strapi.entityService.findMany(
        "plugin::upload.file",
        {
          fields: ["url", "name", "alternativeText"],
        }
      );

      const sanitizedEntity = await this.sanitizeOutput(images, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
